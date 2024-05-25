var express = require("express");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var workshopRoute = require("./routes/workshop");
var userRoute = require("./routes/user");
var authRoute = require("./routes/auth");
var speakerRoute = require("./routes/speaker");

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
    await mongoose.connect("mongodb://127.0.0.1:27017/greenteenage-website", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connect successful.");
  } catch (err) {
    console.log("MongoDB connect fail");
  }
};

// // for testing
// app.get("/", (req, res) => {
//   res.send("api is working");
// });

/// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/workshops", workshopRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/speaker", speakerRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port ", port);
});
