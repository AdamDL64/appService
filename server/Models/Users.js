const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    password: {
        type: String
    },
    role:{
        type:String,
        default:"user"
    },
}, { timestamps: true })

module.exports = mongoose.model('users', userSchema)