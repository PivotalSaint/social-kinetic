const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/social-kinetic.html"));
});

router.get("/add-thought", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/add-thought.html"));
});

router.get("/thought-list", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/thought-list.html"));
});

module.exports = router;
