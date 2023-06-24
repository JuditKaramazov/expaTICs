import React, { createContext, useState, useContext } from "react";
import { collection, doc, addDoc, getDocs, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { AuthContext } from "./AuthContext";
import { sendEmailWithCoffeeGift } from "../../app/api/sendEmail";


export const CoffeeContext = createContext();

export function CoffeeContextProvider(props) {
  const { currentUser } = useContext(AuthContext);

  const [selectedCoffeeType, setSelectedCoffeeType] = useState("");
  const [selectedMessageTemplate, setSelectedMessageTemplate] = useState("");
  const [hostCountry, setHostCountry] = useState("");

  const getRandomRecipient = async () => {
    if (currentUser) {
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);
      const users = querySnapshot.docs.map((doc) => doc.data());

      // Filters out the current user from the list of users.
      const filteredUsers = users.filter((user) => user.email !== currentUser.email);

      // Selects a random recipient.
      const randomIndex = Math.floor(Math.random() * filteredUsers.length);
      const randomRecipient = filteredUsers[randomIndex];

      if (randomRecipient) {
        return randomRecipient.email;
      }
    }
    return null;
  };

  const sendCoffeeGift = async () => {
    const randomRecipient = await getRandomRecipient();
  
    if (randomRecipient) {
      try {
        const emailData = {
          to: randomRecipient,
          subject: "You've received a coffee gift!",
          body: `You've received a coffee gift of type ${selectedCoffeeType} with the message: "${selectedMessageTemplate}"`,
        };
  
        await sendEmailWithCoffeeGift(emailData);
  
        console.log("Email sent to recipient:", randomRecipient);
  
        // Store coffee gift data in Firestore
        const coffeeGiftData = {
          coffeeType: selectedCoffeeType,
          messageTemplate: selectedMessageTemplate,
          hostCountry: hostCountry,
          senderId: currentUser.uid,
          recipientId: randomRecipient,
          createdAt: serverTimestamp(),
        };
  
        const coffeeGiftsRef = collection(db, "coffeeGifts");
        const docRef = await addDoc(coffeeGiftsRef, coffeeGiftData);
  const coffeeGiftId = docRef.id; // Get the coffee gift ID

  // Fetch the coffee gift document and send it to the email delivery system
  const coffeeGiftDoc = await getDoc(docRef);
  const coffeeGift = coffeeGiftDoc.data();

  // Send the coffee gift document to the email delivery system
  await sendEmailWithCoffeeGift(emailData, coffeeGiftId);
  
        // Resets the form after sending the coffee gift.
        setSelectedCoffeeType("");
        setSelectedMessageTemplate("");
        setHostCountry("");
      } catch (error) {
        console.error("Error sending coffee gift:", error);
      }
    } else {
      console.error("No random recipient found.");
    }
  };
  

  const contextValue = {
    selectedCoffeeType,
    setSelectedCoffeeType,
    selectedMessageTemplate,
    setSelectedMessageTemplate,
    hostCountry,
    setHostCountry,
    sendCoffeeGift,
  };

  return (
    <CoffeeContext.Provider value={contextValue}>
      {props.children}
    </CoffeeContext.Provider>
  );
}
