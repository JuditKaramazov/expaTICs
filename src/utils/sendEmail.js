import sgMail from "sendgrid/mail";

// Initializes SendGrid.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (emailData) => {
  try {
    // Constructs the email message.
    const message = {
      to: emailData.to,
      from: "jkaramazovi@gmail.com",
      subject: emailData.subject,
      text: emailData.body,
    };

    // Sends the email.
    await sgMail.send(message);

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
