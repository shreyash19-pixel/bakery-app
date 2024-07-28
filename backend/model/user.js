const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bycrypt = require("bcryptjs")

const UserSchema = new mongoose.Schema({
    email : {
        type: String,
        required : [true, "Please provide an email"],
        match : [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "please provide a valid email"
        ],
        unique: true
    },

    name: {
        type: String,
        required: [true, "Please provide a name"],
        trim: true,
        minlength: 3,
        maxlength: 20
    },

    password:{
        type: String,
        required: [true, "Please provide a password"],
        minlength: 5
    }
})

UserSchema.pre("save" , async function() {
    const salt = await bycrypt.genSalt(10)
    this.password = await bycrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function(enteredPassword) {
    const isPasswordMatching = bycrypt.compare(enteredPassword, this.password)
    return isPasswordMatching
}

UserSchema.methods.jwtCreate = async function () {
    return jwt.sign({userId : this._id, name: this.name}, process.env.JWT_SECRET, {expiresIn : "30d"})
}

module.exports = mongoose.model("User", UserSchema)