require("dotenv").config();
const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});
// FINDIND THAT ONE USER WITH THIS ID
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
      const user = await User.findOne({ clientID: profile.id });

      if (user) {
        done(null, user);
      } else {
        const newUser = new User({
          clientID: profile.id,
          name: profile.displayName,
          profilePicture: profile.photos ? profile.photos[0].value : null,
          email: profile.emails ? profile.emails[0].value : null,
        }).save();
        done(null, newUser);
      }
    }
  )
);
passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENTID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/spotify/callback",
    },
    async (accessToken, refreshToken, expires_in, profile, done) => {
      const user = await User.findOne({ clientID: profile.id });

      if (user) {
        done(null, user);
      } else {
        const newUser = new User({
          clientID: profile.id,
          name: profile.displayName,
          profilePicture: profile.photos ? profile.photos[0].value : null,
          email: profile.emails ? profile.emails[0].value : null,
        }).save();
        done(null, newUser);
      }
    }
  )
);
