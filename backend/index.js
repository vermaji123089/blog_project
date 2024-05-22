const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const UserSchema = require("./model/user");
const Token = require("./model/token");
const sendMail = require('./utils/sendmail');
const crypto = require("crypto");

const app = express();

dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/blognew")
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch(() => {
    console.log("MongoDB is not connected");
  });

// API for creating an account
app.post("/api/creataccount", async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await UserSchema.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Your Account Already Exists',
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new user
    const newUser = new UserSchema({
      ...req.body,
      password: hashedPassword,
    });

    // Save the user to the database
    const user = await newUser.save();

    // Generate a unique token for email verification
    const token = new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    // Save the token to the database
    await token.save();

    // Send verification email
    const verificationUrl = `http://localhost:5173/verfy/${token.token}`;
    // const verificationUrl = `http://localhost:3001/verify-email?token=${token.token}`;
    const emailSubject = "Verify Your Email";
    const emailText = `Hi ${user.name},\n\nPlease click the following link to verify your email address:\n\n${verificationUrl}`;
    await sendMail(user.email, emailSubject, emailText);

    res.status(200).json({
      success: true,
      message: 'Account created successfully. Please check your email for verification.',
      user: user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error. Please try again later.',
    });
  }
});
// -------------------------------------------------------------------------------------
app.get("/verify-email", async (req, res) => {
    const token = req.query.token;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Invalid token.',
      });
    }
  
    try {
      // Find the token in the database
      const tokenDoc = await Token.findOne({ token: token });
      if (!tokenDoc) {
        return res.status(400).json({
          success: false,
          message: 'Invalid token.',
        });
      }
      await UserSchema.updateOne({ _id: tokenDoc.userId }, { veried: true });
      // Mark the user as verified
    //   await UserSchema.updateOne({ _id: tokenDoc.userId }, { verified: true });
  
      // Delete the token from the database
    //   await tokenDoc.remove();
    //   await Token.deleteOne({ _id: tokenDoc._id });
      res.status(200).json({
        success: true,
        message: 'Email verified successfully.',
      });
    } catch (error) {
      console.error("Error verifying email:", error);
      res.status(500).json({
        success: false,
        message: 'Internal Server Error. Please try again later.',
      });
    }
  });
  



app.listen(3001, () => {
  console.log("Server is running at http://localhost:3001/");
});
