const express = require("express");
const router = express.Router();

// get the model
const AddStudents = require("../models/students");

// ROUTES
router.get("/", (req, res) => {
  // get all data from my db and display on this api
  AddStudents.find({})
    .then((data) => {
      // console.log("Data: ", data);
      console.log("Data is available!");
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

router.post("/students", (req, res) => {
  console.log("body", req.body);
  // save data to mongodb
  const data = req.body;
  const addNewStudent = new AddStudents(data);
  addNewStudent.save((error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ msg: "ops, data was not sent!" });
    } else {
      res.json({ msg: "posted data!" });
    }
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "patricia",
    age: 21,
  };
  res.json(data);
});

module.exports = router;
