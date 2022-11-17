const router = require("express").Router();
const path = require("path");

router.get("/users", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/social-kinetic.html"));
});

// router.get("/thoughts", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../../public/thought-list.html"));
// });

router.get("/social", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../public/social-kinetic.html"));
});

module.exports = router;
