const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save to database
    const contact = await Contact.create({ name, email, message });

    // Send email (optional)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: message,
      html: `<p>You have a new contact request</p>
             <h3>Contact Details</h3>
             <ul>
               <li>Name: ${name}</li>
               <li>Email: ${email}</li>
             </ul>
             <h3>Message</h3>
             <p>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};