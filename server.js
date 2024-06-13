import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import emailjs from "emailjs-com";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/api/send-email", (req, res) => {
  const { from_name, reply_to, subject, message } = req.body;

  const templateParams = {
    from_name,
    to_name: "Franklin Essono", // Your name or static value
    message: `Objet: ${subject}\n\nMessage:\n${message}`,
    reply_to,
  };

  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.EMAILJS_USER_ID
    )
    .then((response) => {
      res.status(200).send("Email sent successfully!");
    })
    .catch((error) => {
      res.status(500).send("Failed to send email.");
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
