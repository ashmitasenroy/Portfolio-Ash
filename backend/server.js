require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path"); // Import the 'path' module

const app = express();

// --- Production-Ready CORS Configuration ---
const allowedOrigins = [
  // Add your deployed frontend URL here after deployment
  // e.g., 'https://your-portfolio-ash.com'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.length === 0) { // During development, allow all
        return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

// --- Serve Static Frontend Files ---
// This tells Express to serve all files from the 'dist' directory of your frontend
app.use(express.static(path.join(__dirname, '..', 'portfolio', 'dist')));

const PORT = process.env.PORT || 5000; // Use environment variable for port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// --- Your Existing Nodemailer and Contact Route Logic ---
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Ensure this is a Google App Password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/api/contact", (req, res) => { // Recommended: Prefix API routes with /api/
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Portfolio Contact Form Submission",
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ code: 500, message: "Failed to send message" });
    } else {
      res.status(200).json({ code: 200, message: "Message sent successfully" });
    }
  });
});

// --- Catch-All Route for Frontend ---
// This route will serve your 'index.html' for any request that doesn't match an API route or a static file.
// This is crucial for client-side routing (React Router) to work correctly.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'portfolio', 'dist', 'index.html'));
});