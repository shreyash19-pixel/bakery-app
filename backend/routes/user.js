const express = require("express")
const authMiddleware = require("../middleware/authenticate")
const router = express.Router()
const {register, login} = require("../controllers/user")

router.route("/register").post(register)
router.route("/login").post(login)

module.exports = router