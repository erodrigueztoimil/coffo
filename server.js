const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());
app.use(cors());
require("dotenv").config();

const uri = process.env.MONGODB_URI || "mongodb://localhost/exampleDatabase";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongo connection established successfully.");
  })
  .catch(console.error);

// API routes
require("./routes/api/user")(app);

// // production build
app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`==> 🌎  Listening on port ${port}.`);
});
