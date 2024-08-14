
const User = require("../model/user")
const {StatusCodes} = require("http-status-codes")

const register = async (req, res) => {
    try
    {
        const {email} = req.body
        const checkExistingUser = await User.findOne({email})

        if(checkExistingUser.email)
        {   
            return res.status(StatusCodes.CONFLICT).send("Email already exists")
        }

        const user = await User.create({...req.body})
        const token = await user.jwtCreate()
        res.status(StatusCodes.CREATED).json({token})

    }
    catch(err)
    {
        res.json({err : {err}})
    }
}


const login = async (req, res) => {
    try
    {
        const {email,password} = req.body
        if(!email || !password)
        {
            return res.status(StatusCodes.BAD_REQUEST).send("Please provide credentials")
        }

        const user = await User.findOne({email})

        if(!user.email)
        {
            return res.status(StatusCodes.NOT_FOUND).send("User not registered")
        }
        
        const comparedPassword = await user.comparePassword(password)
        
        if(!comparedPassword)
        {
            return res.status(StatusCodes.UNAUTHORIZED).send("Invalid Credential")
        }
        
        const token = await user.jwtCreate()
        res.status(StatusCodes.OK).json({user : {name : user.name}, token})

    }
    catch(err)
    {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err : err.message})
    }
}


module.exports = {register, login}