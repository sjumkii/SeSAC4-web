const express = require("express");
const sign = require("../controller/SignController");
const router = express.Router();

router.get("/", sign.get_signup);
router.post("/signup", sign.post_signup);

router.get("/login", sign.login);
router.post("/login", sign.post_login);

router.get("/info", sign.get_info);
router.patch("/info/edit", sign.patch_info);
router.delete("/info/delete", sign.delete_info);

module.exports = router;