import React, { createContext, useState, useContext } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { transporter, mailOptions } from "../config/nodemailer";
import { AuthContext } from "./AuthContext";

export const CoffeeContext = createContext();

export function CoffeeContextProvider(props) {
  const { currentUser } = useContext(AuthContext);

  const coffeeGiftsCollection = collection(db, "coffeeGifts");
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
        const coffeeGiftData = {
          coffeeType: selectedCoffeeType,
          messageTemplate: selectedMessageTemplate,
          hostCountry: hostCountry,
          senderId: currentUser.uid,
          recipientId: randomRecipient,
          createdAt: new Date(),
        };
  
        // Creates a new coffee gift document in the "coffeeGifts" collection in Firestore.
        const docRef = await addDoc(coffeeGiftsCollection, coffeeGiftData);
        console.log("Coffee gift sent with ID: ", docRef.id);
  
        // Sends an email to the recipient using nodemailer.
        const emailData = {
          ...mailOptions,
          to: randomRecipient,
          subject: "You've received a coffee gift!",
          text: `You've received a coffee gift of type ${selectedCoffeeType} with the message: "${selectedMessageTemplate}"`,
        };
        transporter.sendMail(emailData, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
          } else {
            console.log("Email sent to recipient:", randomRecipient);
          }
        });
  
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
