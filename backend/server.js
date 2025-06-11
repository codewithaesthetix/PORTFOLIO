const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/projects')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Contact schema & model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
}, { timestamps: true });

const Contact = mongoose.model('Contact', ContactSchema);

// Configure Nodemailer with app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kazamali562@gmail.com',
    pass: 'wedm tiyk rmzt boxh' // Replace with actual app password
  }
});

// Contact API route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    const mailOptions = {
      from: 'kazamali562@gmail.com',
      to: 'kazamali562@gmail.com',
      subject: 'New Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message saved and email sent' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});