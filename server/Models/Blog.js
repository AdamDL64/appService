
const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    title:{
        type:String,
       
    },
    detail:{
        type:String,
        
    },
    name:{
        type:String, 
    },
    statusform:{
        type:String,
        default:"รอการดำเนิดการ"
    }
    
}, { timestamps: true })

module.exports = mongoose.model('blogs', BlogSchema)