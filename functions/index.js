const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendCoffeeGiftEmail = functions.firestore
  .document("coffeeGifts/{coffeeGiftId}")
  .onCreate(async (snapshot) => {
    const coffeeGiftData = snapshot.data();

    const mailOptions = {
      from: process.env.EMAIL,
      to: coffeeGiftData.recipientId,
      subject: "You've received a coffee gift!",
      text: `You've received a coffee gift of type ${coffeeGiftData.coffeeType} with the message: "${coffeeGiftData.messageTemplate}"`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent to recipient:", coffeeGiftData.recipientId);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
