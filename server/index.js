var express = require("express");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var workshopRoute = require("./routes/workshop");
var userRoute = require("./routes/user");
var authRoute = require("./routes/auth");
var speakerRoute = require("./routes/speaker");
var passport = require("passport");
const session = require("express-session");
const User = require("./models/User");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
// const passportSetup = require("./passport")
// const ggRouter = require("./routes/googleAuth")
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};


//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://duyan3k:hellohieu@healing-hieu.cgcwoh4.mongodb.net/?retryWrites=true&w=majority&appName=healing-hieu", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connect successful.");
  } catch (err) {
    console.log("MongoDB connect fail");
  }
};

// passport Google
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  scope: ["profile", "email"]
},
  async (accessToken, refreshToken, profile, done) => {
    // console.log(profile)
    try {
      let user = await User.findOne({ email: profile.emails[0].value })

      if (!user) {
        user = new User({
          username: profile.id,
          email: profile.emails[0].value,
          photo: profile.photos[0].value,
          password: "doimatkhaudi"
        });

        await user.save();
      }

      return done(null, user)
    } catch (error) {
      return done(error, null)
    }
  }
));

app.use(session({
  secret: "892137829hjskahdjska",
  resave: false,
  saveUninitialized: true
}))

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

// // for testing
// app.get("/", (req, res) => {
//   res.send("api is working");
// });

/// middleware
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/ggauth", ggRouter);
app.use("/api/v1/workshops", workshopRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/speaker", speakerRoute);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: process.env.CLIENT_URL_LOGIN_FAILED,
    successRedirect: process.env.CLIENT_URL
  })
);

app.get("/login/success", async (req, res) => {
  console.log(req)
  if (req.user) {
    res.status(200).json({
      message: "user login",
      user: req.user
    })
  }
  else {
    res.status(400).json({
      message: "Not authorized",
    })
  }
})

app.get("/logout", (req, res, next) => {
  // req.logout(function (err) {
  //   if (err) { return next(err) }
  //   res.redirect("http://localhost:3000/")
  // })

  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    res.clearCookie('accessToken');
    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  });

})

app.listen(port, () => {
  connect();
  console.log("server listening on port ", port);
});
