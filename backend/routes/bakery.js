const express = require("express")
const router = express.Router()
const {homePage} = require("../controllers/bakery")


router.route("/homePage").get(homePage)


module.exports = router