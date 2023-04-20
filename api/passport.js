require("dotenv").config();
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENTID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne(profile.id);

      if (user) {
        done(null, user);
      } else {
        const newUser = new User({
          clientID: profile.id,
          email: profile.emails ? profile.emails[0].value : null,
        }).save();
        done(null, newUser);
      }
    }
  )
);
