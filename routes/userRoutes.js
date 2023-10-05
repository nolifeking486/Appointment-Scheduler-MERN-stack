const express = require("express");
const {
    loginController,
    registerController,
    authController,
} = require("../controllers/userctrl.js");
const authMiddleware = require("../middlewares/authMiddleware.js");
const profModel = require("../models/profModel.js");
const appointmentModel = require("../models/appointmentModel.js");
const { default: mongoose } = require("mongoose");
//router object
const router = express.Router();

//routes
//Login || Post
router.post("/login", loginController);

//Register || Post
router.post("/register", registerController);

//AUTH || POST
router.post("/getUserData", authMiddleware, authController);

// GET to professors
router.get('/searchProfessors', authMiddleware, async (req, res) => {
    try {
      const searchTerm = req.query.q;
      const searchResults = await profModel.find({
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { department: { $regex: searchTerm, $options: 'i' } },
        ],
      });
      res.status(200).json(searchResults);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  // POST to appointments
router.post("/appointments", async (req, res) => {
    const { to, from, studemail, receiveremail, subject, query, name, id, starttime, slot} = req.body;
    const appointment = new appointmentModel({
      to,
      from,
      studemail,
      receiveremail,
      subject,
      query,
      name,
      id,
      starttime,
      slot,
    });
    try {
      const savedAppointment = await appointment.save();
      res.json(savedAppointment);
    } catch (err) {
      res.json({ message: err });
    }
  });

  // GET to appointments
  router.get("/getappointments", (req, res) => {
    const myname = req.query.from;
    appointmentModel
      .find({ myname })
      .then((appointments) => res.json(appointments))
      .catch((err) => res.status(400).json("Error: " + err));
  });

  // GET to AdminAppointments
  router.get("/getpendingappointments", async (req, res) => {
    const receiveremail = req.query.receiveremail;
    console.log(receiveremail);
    try {
      const appointments = await appointmentModel.find({
        receiveremail: receiveremail,
        status: "Pending",
      });
      res.json(appointments);
    } catch (err) {
      res.json({ message: err });
    }
});

// PUT to update the status
router.put('/appointments/:id', async (req, res) => {
  try {
    const appointmentId = mongoose.Types.ObjectId(req.params.id);
    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { $set: { status: req.body.status } },
      { new: true }
    );
    res.status(200).json(appointment);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating appointment status');
  }
});

router.get('/appointments', async (req, res) => {
  try {
    const appointments = await appointmentModel.find({ receiveremail: req.query.receiveremail, status: { $in: ['Approved', 'Rejected'] } });
    res.status(200).json(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error retrieving appointments');
  }
});
module.exports = router;