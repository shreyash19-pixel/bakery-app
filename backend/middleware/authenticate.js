const jwt = require("jsonwebtoken")
require("dotenv")

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.send("Not Authenticated");
    }

    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {userId : payload.userId, name : payload.name}
        next()
    } catch (err) {
        res.send(err);
    }
};

module.exports = authMiddleware;
