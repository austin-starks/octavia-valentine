import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import logger from "morgan";
import path from "path";
import sgMail from "@sendgrid/mail";

dotenv.config();
const app = express();

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const { choice } = req.body;
    if (!choice) {
      res.status(400).json({ message: "Choice is required" });
    }

    const text = `Octavia said ${choice}`;
    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_EMAIL) {
      console.log(
        "Email not sent because SENDGRID_EMAIL or SENDGRID_API_KEY is not set"
      );
      return res.status(200).json({ message: "Email sent successfully" });
    }
    // const msg = {
    //   to: process.env.SENDGRID_EMAIL as string,
    //   from: process.env.SENDGRID_EMAIL as string,
    //   subject: "Octavia said yes!",
    //   text,
    // };
    // await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).json({ message: "Error sending email" });
  }
});

// Serve static files (if needed)
let url = path.join(__dirname, "../../client/dist");
app.use(express.static(url));

// Fallback route for client-side routing
app.get("/*", async function (req, res) {
  const filePath = path.join(__dirname, "../../client/dist", "index.html");
  return res.sendFile(filePath);
});

// Start the server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
