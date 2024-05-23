var express = require("express");
var dotenv = require("dotenv");
var mongoose = require("mongoose");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var workshopRoute = require("./routes/workshop");

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

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
app.use(cors());
app.use(cookieParser());
app.use("/workshop", workshopRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port ", port);
});
