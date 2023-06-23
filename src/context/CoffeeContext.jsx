import React, { createContext, useState, useContext, useEffect } from "react";
import { MongoClient } from "mongodb";
import sendEmail from "../utils/sendEmail";

export const CoffeeContext = createContext();

export function CoffeeContextProvider(props) {
  const { currentUser } = useContext(AuthContext);

  const [selectedCoffeeType, setSelectedCoffeeType] = useState("");
  const [selectedMessageTemplate, setSelectedMessageTemplate] = useState("");
  const [hostCountry, setHostCountry] = useState("");

  // MongoDB connection.
  require('dotenv').config();
  const mongoURI = process.env.MONGODB_URI;
  const dbName = "coffee-gifts";
  const mongoClient = new MongoClient(mongoURI);

  useEffect(() => {
    mongoClient.connect((err) => {
      if (err) {
        console.error("Failed to connect to MongoDB:", err);
      } else {
        console.log("Connected to MongoDB");
      }
    });

    return () => {
      mongoClient.close();
    };
  }, []);

  const getRandomRecipient = async () => {
    if (currentUser) {
      const usersRef = collection(db, "users");
      const querySnapshot = await getDocs(usersRef);
      const users = querySnapshot.docs.map((doc) => doc.data());
  
      // Filters out the current user from the list of users.
      const filteredUsers = users.filter((user) => user.email !== currentUser.email);
  
      // Determines the index of the next recipient based on the number of sent gifts.
      const coffeeGiftsCollection = mongoClient.db(dbName).collection("gifts");
      const sentGiftsCount = await coffeeGiftsCollection.countDocuments();
      const nextRecipientIndex = sentGiftsCount % filteredUsers.length;
  
      // Selects the recipient based on the calculated index.
      const nextRecipient = filteredUsers[nextRecipientIndex];
  
      if (nextRecipient) {
        return nextRecipient.email;
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
          createdAt: serverTimestamp(),
        };
  
        // Creates a new coffee gift document in the "coffeeGifts" collection in MongoDB.
        const coffeeGiftsCollection = mongoClient.db(dbName).collection("gifts");
        const insertedGift = await coffeeGiftsCollection.insertOne(coffeeGiftData);
  
        console.log("Coffee gift sent to MongoDB with ID: ", insertedGift.insertedId);

        // Sends an email to the recipient by using SendGrid.
        const emailData = {
          to: randomRecipient,
          subject: "You've received a coffee gift!",
          body: `You've received a coffee gift of type ${selectedCoffeeType} with the message: "${selectedMessageTemplate}"`,
        };
        await sendEmail(emailData);

        console.log("Email sent to recipient: ", randomRecipient);

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
