const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let fetchUser=require("../middleware/fetchUser")
const JWT_SECRET = "dobbyisfree1";

// Create a USER using : POST "/api/auth/createuser" doesn't require Auth

router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 2 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be of atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    // if there are errors BAD request is sent along with errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Checking if an user with this email already exists
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secured_password = await bcrypt.hash(req.body.password, salt);

      //Creating new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secured_password,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const auth_token = jwt.sign(data, JWT_SECRET);

      res.json({ auth_token });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// USER login : POST "/api/auth/login" doesn't require Auth

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    // if there are errors BAD request is sent along with errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      //Searching for an user with the email sent
      let user = await User.findOne({ email: email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Try to login with correct credentials" });
      }
      //Checking if the sent password is correct
      const compare_password = await bcrypt.compare(password, user.password);
      if (!compare_password) {
        return res
          .status(400)
          .json({ error: "Try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const auth_token = jwt.sign(data, JWT_SECRET);

      res.json({ auth_token });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// get logged-in user detail : POST "/api/auth/getuser" : token required
router.post(
  "/getuser",
  fetchUser,
  async (req, res) => {
    try {
      userID = req.user.id;
      const user = await User.findById(userID).select("-password");
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Internal Server Error");
    }
  }
);

module.exports = router;
