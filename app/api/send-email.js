import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";
import sendEmail from "./sendEmail";

const cors = initMiddleware(
  Cors({
    methods: ["POST"],
    origin: "http://localhost:3000", // Replace with your actual local development URL
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === "POST") {
    const { emailData } = req.body;

    try {
      await sendEmail(emailData);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
