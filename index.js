require("dotenv").config();
require("./models/User");
require("./api/passport");
const cookieSession = require("cookie-session");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const route = require("./routes/authRoutes");
const dataRoute = require("./routes/dataRoutes");
const cors = require("cors");
const app = express();


app.use(cors());
mongoose.connect(process.env.MONGODB_CONNECTION_URI);
app.use(
  cookieSession({
    session: "session",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.SESSION_KEY],
  })
);
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(route);
app.use(dataRoute);

app.listen(process.env.PORT);
