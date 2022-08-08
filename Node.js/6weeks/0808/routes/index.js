const express = require("express");
const sign = require("../controller/SignController");
const router = express.Router();

router.get("/", sign.get_signup);
router.post("/signup", sign.post_signup);
router.get("/get", sign.get_info);
router.patch("/edit", sign.patch_info);
router.delete("/delete", sign.delete_info);

module.exports = router;