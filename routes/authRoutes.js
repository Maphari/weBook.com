require("dotenv").config();
const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passport = require("passport");

const isPassportAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) next();
  else res.status(403).json({ errorMessage: "User is not authenticated" });
};

const isEmailAuthenticated = function (req, res, next) {
  if (req.session.user) next();
  else res.status(403).json({ errorMessage: "User is not authenticated" });
};

// SUCCESS LOG IN ROUTES
route.get("/api/v1/auth/account_success", isEmailAuthenticated, (req, res) => {
  if (req.session.user?.user)
    res.json({ user: req.session.user, message: "verified" });
  else res.json({ message: "User not authenticated" });
});

route.get(
  "/api/v1/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
route.get(
  "/api/v1/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_ROUTE + "/home",
    failureRedirect: process.env.CLIENT_ROUTE + "/account/login",
  })
);
// ROUTES FOR USER TO CREATE ACCOUNT AND LOGIN USING FORMS
route.post("/api/v1/auth/signup_user", async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      const newUser = new User({
        clientID: null,
        email: email,
        password: password,
      });

      const token = jwt.sign({ userId: newUser._id }, process.env.MY_SECRET, {
        expiresIn: "24",
      });
      newUser.clientID = token;
      req.session.user = {
        clientID: newUser.clientID,
        email: newUser.email,
        password: newUser.password,
      };

      await newUser.save();

      res.status(200).json({
        exist: false,
        message: "Account created successfully",
        session: token,
        user: newUser,
      });
    } else {
      const token = jwt.sign({ userId: user._id }, process.env.MY_SECRET, {
        expiresIn: "24h",
      });
      user.clientID = token;

      req.session.user = {
        clientID: user.clientID,
        email: user.email,
        password: user.password,
      };

      await user.save();
      res.status(200).json({
        exist: true,
        message: "Account updated successfully",
        session: token,
        user: user,
      });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

route.post("/api/v1/auth/signin_user", async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ exist: false, errorMessage: "User not found" });
    }

    // CHECKING IF PASSWORD PROVIDED IS THE SAME PASSWORD AS HASHED
    const passwordHashMatch = await bcrypt.compare(password, user.password);
    if (!passwordHashMatch) {
      res.status(401).json({ errorMessage: "Password does'nt match" });
    }

    req.session.user = {
      user: user,
      session: user?.clientID,
    };

    res.status(200).json({
      message: "Login successfully",
      session: user?.clientID,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = route;
