const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT
const connectDB = require("./DB/connect")
const userRoutes = require("./routes/user")
const authMiddleware = require("./middleware/authenticate")
const notFound = require("./middleware/notfound")

app.use(express.json())
app.use("/api/v1/auth",userRoutes)


app.use(notFound)

const start = async () => {
    try
    {
        await connectDB(process.env.MONGO_URI)
        console.log("Connected to database....");
        app.listen(port, () => {
            console.log(`Server is listening to ${port} port...`);
        })
    }
    catch(err)
    {
        console.log(err);
    }
}

start()