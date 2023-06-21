import React, { createContext, useState, useContext, useEffect } from "react";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { AuthContext } from "./AuthContext";

export const CoffeeContext = createContext();

export function CoffeeContextProvider(props) {
  const { currentUser } = useContext(AuthContext);

  const [selectedCoffeeType, setSelectedCoffeeType] = useState("");
  const [selectedMessageTemplate, setSelectedMessageTemplate] = useState("");
  const [hostCountry, setHostCountry] = useState("");
  const [notifications, setNotifications] = useState([]);

  const getRandomRecipient = async () => {
    if (currentUser) {
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);
      const users = querySnapshot.docs.map((doc) => doc.data());

      // Filter out the current user from the list of users
      const filteredUsers = users.filter((user) => user.email !== currentUser.email);

      // Select a random user from the filtered list
      const randomIndex = Math.floor(Math.random() * filteredUsers.length);
      const randomUser = filteredUsers[randomIndex];

      if (randomUser) {
        return randomUser.email;
      }
    }

    // If no random user is found or the current user is not available, return null
    return null;
  };

  const sendCoffeeGift = async () => {
    const randomRecipient = await getRandomRecipient();

    if (randomRecipient) {
      try {
        const coffeeGiftData = {
          coffeeType: selectedCoffeeType,
          messageTemplate: selectedMessageTemplate,
          hostCountry: hostCountry,
          senderId: currentUser.uid,
          recipientId: randomRecipient,
          createdAt: serverTimestamp(),
        };

        // Create a new coffee gift document in the "coffeeGifts" collection with a random ID
        const docRef = await addDoc(collection(db, "coffeeGifts"), coffeeGiftData);

        console.log("Coffee gift sent with ID: ", docRef.id);

        // Create a notification document for the recipient in the "notifications" collection
        const notificationData = {
          coffeeGiftId: docRef.id,
          recipientId: randomRecipient,
          senderId: currentUser.uid,
          read: false,
          createdAt: serverTimestamp(),
        };
        await addDoc(collection(db, "notifications"), notificationData);

        console.log("Notification created for recipient: ", randomRecipient);

        // Reset the form after sending the coffee gift
        setSelectedCoffeeType("");
        setSelectedMessageTemplate("");
        setHostCountry("");
      } catch (error) {
        console.error("Error sending coffee gift:", error);
        // Handle the error appropriately
      }
    } else {
      console.error("No random recipient found.");
      // Handle the case when no random recipient is available
    }
  };

  const getNotifications = async (userId) => {
    try {
      const notificationsRef = collection(db, "notifications");
      const querySnapshot = await getDocs(query(notificationsRef, where("recipientId", "==", userId)));

      const notifications = [];
      querySnapshot.forEach((doc) => {
        const notification = {
          id: doc.id,
          ...doc.data(),
        };
        notifications.push(notification);
      });

      setNotifications(notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      // Handle the error appropriately
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      const notificationDocRef = doc(db, "notifications", notificationId);
      await updateDoc(notificationDocRef, {
        read: true,
      });

      const updatedNotifications = notifications.map((notification) =>
        notification.id === notificationId ? { ...notification, read: true } : notification
      );

      setNotifications(updatedNotifications);
    } catch (error) {
      console.error("Error marking notification as read:", error);
      // Handle the error appropriately
    }
  };

  useEffect(() => {
    if (currentUser) {
      getNotifications(currentUser.uid);
    }
  }, [currentUser]);

  const contextValue = {
    selectedCoffeeType,
    setSelectedCoffeeType,
    selectedMessageTemplate,
    setSelectedMessageTemplate,
    hostCountry,
    setHostCountry,
    sendCoffeeGift,
    notifications,
    markNotificationAsRead,
    getNotifications,
  };

  return (
    <CoffeeContext.Provider value={contextValue}>
      {props.children}
    </CoffeeContext.Provider>
  );
}
