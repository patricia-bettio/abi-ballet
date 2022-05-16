const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes/api");
// TODO: find a way to protect password
const MONGODB_CLUSTER =
  "mongodb+srv://pfbettio:admin123@abi-ballet.ap7fy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// connect to the MONGODB_CLUSTER, if it doesnt workerData, connect to the local db
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_CLUSTER);
    console.log("MongoDB connected!!");

    // these 2 lines are giving me the data in applicationCache.js as req.body
    // if I remove them, I get undefined
    app.use(express.json());
    app.use(express.urlencoded({ extended: false })); //false cause I have a super simple obj

    app.use(morgan("tiny")); //rename it
    app.use("/api", routes);
    app.listen(PORT, console.log(`Yey, server starting at port: ${PORT}`));
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
}

connectDB();
