const express = require("express");
const router = express.Router();
const AddStudents = require("../models/students");

// GET

router.get("/", async (req, res) => {
  AddStudents.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
});

//DELETE
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await AddStudents.findByIdAndDelete(id).exec();
  res.send("deleted!");
});

//PATCH
router.patch("/patch/:id", async (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  console.log(req.params);
  await AddStudents.findByIdAndUpdate(id, newData).exec();
  res.send("updated!");
});

//POST
router.post("/students", (req, res) => {
  console.log("body", req.body);
  // save data to mongodb
  const data = req.body;
  const addNewStudent = new AddStudents(data);
  addNewStudent.save((error) => {
    // if (error) {
    //   console.log(error);
    //   res.status(500).json({ msg: "ops, data was not sent!" });
    // } else {
    //   res.json({ msg: "posted data!" });
    // }
    if (error) {
      // console.log(error);
      res.status(500).json({ msg: "ops, data was not sent!" });
      return;
    }
    return res.json({ msg: "posted data now!" });
  });
});

// router.get("/name", (req, res) => {
//   const data = {
//     username: "patricia",
//     age: 21,
//   };
//   res.json(data);
// });

module.exports = router;
