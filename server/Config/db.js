const mongoose =require('mongoose')
require("dotenv").config()

const connectDB = async ()=> {
    try {
        await mongoose.connect(process.env.MONGOOSE_URL)
        console.log("connect mongooseDB success")
    } catch (error) {
        console.log(error)
    }
    
}

module.exports=connectDB