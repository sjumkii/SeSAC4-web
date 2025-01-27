const express = require("express");
const sign = require("../controller/SignController");
const router = express.Router();

router.get("/", sign.signup)
router.post("/signup", sign.post_signup);


router.get("/login", sign.login);
router.post("/login", sign.post_login)

router.post("/info", sign.info);
router.post("/info/edit", sign.info_edit);
router.post("/info/delete", sign.info_delete);

module.exports = router;