
const {StatusCodes} = require("http-status-codes")

const homePage = async (req, res) => {
    try {
        res.json({ message: "Home Page" })
    }
    catch (err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err : err.message})
    }
}

module.exports = {homePage}