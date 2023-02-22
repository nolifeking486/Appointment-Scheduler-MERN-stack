const express = require("express");
const {
    loginController,
    registerController,
    authController,
} = require("../controllers/userctrl.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

//router object
const router = express.Router();

//routes
//Login || Post
router.post("/login", loginController);

//Register || Post
router.post("/register", registerController);

//AUTH || POST
router.post("/getUserData", authMiddleware, authController);

module.exports = router;