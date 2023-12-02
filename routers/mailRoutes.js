const express = require("express");
const { contactMail, warrantyMail } = require("../controllers/mailControllers");
const router = express.Router();

router.post("/contactus", contactMail);
router.post("/warrantyform", warrantyMail);

module.exports = router;