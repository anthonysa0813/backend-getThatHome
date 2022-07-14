const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.json({
    message: "login",
  });
});

router.get("/signup", (req, res) => {
  res.json({
    message: "signup",
  });
});

router.get("/logout", (req, res) => {
  res.json({
    message: "logout",
  });
});

module.exports = router;
