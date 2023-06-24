import axios from "axios";
import { getDoc } from "firebase/firestore";

export async function sendEmailWithCoffeeGift(emailData, coffeeGiftId) {  
    try {
      const sendGridApiKey = process.env.SENDGRID_API_KEY;
      const apiUrl = "https://api.sendgrid.com/v3/mail/send";
  
      const headers = {
        Authorization: `Bearer ${sendGridApiKey}`,
        "Content-Type": "application/json",
      };
  
      const emailData = {
        to: coffeeGift.recipientId,
        subject: "You've received a coffee gift!",
        body: `You've received a coffee gift of type ${coffeeGift.coffeeType} with the message: "${coffeeGift.messageTemplate}"`,
      };
  
      await axios.post(apiUrl, emailData, { headers });
  
      cconsole.log("Email sent with coffee gift ID:", coffeeGiftId);
    } catch (error) {
      console.error("Error sending email with coffee gift:", error);
    }
  };