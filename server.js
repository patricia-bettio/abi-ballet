const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const routes = require("./routes/api");
// TODO: find a way to protect password
const MONGODB_CLUSTER =
  // process.env.MONGODB_URI ||
  "mongodb+srv://pfbettio:admin123@abi-ballet.ap7fy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connect to the MONGODB_CLUSTER, if it doesnt workerData, connect to the local db
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || MONGODB_CLUSTER);
    console.log("MongoDB connected!!");

    // these 2 lines are giving me the data in applicationCache.js as req.body
    // if I remove them, I get undefined
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); //false cause I have a super simple obj

    app.use(morgan("tiny")); //rename it
    app.use("/api", routes);
    // app.use(express.static(path.join(__dirname, "public")));

    // app.use(express.static(path.join(__dirname, "./client/build")));
    // app.use(express.static("public"));
    // if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build"));
    });
    // }
    app.listen(PORT, console.log(`Yey, server starting at port: ${PORT}`));

    // if (process.env.NODE_ENV === "production") {
    // app.use(express.static("./client/build/index.html"));
    // app.use("*", express.static(path.join(__dirname, "client", "build")));
    // }
    // app.use(express.static(path.resolve(__dirname, "./client", "build")));
    // app.use(express.static(__dirname));

    // app.use(express.static(__dirname));
    // app.get("*", (req, res, next) => {
    //   // Serve index.html file if it doesn't recognize the route
    //   res.sendFile(path.resolve(__dirname, "./client", "build", "index.html")); // <- Here !
    // });
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
}

connectDB();
