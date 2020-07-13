const express = require("express");
const router = express.Router();

const { signup, signin, forgotpassword, reset, updatepassword } = require("../handlers/auth")

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgotpassword", forgotpassword);
router.get("/reset", reset);
router.put('updatepassword', updatepassword)


module.exports = router;