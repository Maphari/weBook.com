require("dotenv").config();
require("./models/User");
require("./api/passport");
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const route = require("./routes/authRoutes");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");
const treblle = require("@treblle/express");
const app = express();

app.use(cors({ origin: process.env.CLIENT_ROUTE, credentials: true }));
mongoose.connect(process.env.MONGODB_CONNECTION_URI);
app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_KEY],
  })
);
app.use(express.json());
app.use(
  treblle({
    apiKey: process.env.TREBLLE_API_KEY,
    projectId: process.env.TREBLLE_PROJECT_ID,
    additionalFieldsToMask: [],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(route);
app.use(dataRoutes);
app.listen(process.env.PORT);
