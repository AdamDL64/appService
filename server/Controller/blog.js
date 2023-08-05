
const Blog = require("../Models/Blog")

//all show blog
exports.listAll = async (req,res)=>{
    
    try {
        const bloged = await Blog.find({}).exec()  //การเรียนมาแสดง
        res.send(bloged)
    } catch (error) {
        console.log(error)
    }
}

// create blog  http://localhost:5000/api/blog
exports.create = async (req,res)=>{
    
    try {
        // console.log(req.body)  ตัวอย่างแสดงค่าของที่เราจะสร้าง
        
        const bloged = await Blog(req.body).save() //saveข้อมูลลงใน mongoose
        res.send(bloged)
    } catch (error) {
        console.log(error)
    }
}

//show single blog
exports.read = async (req,res)=>{
    try {
        const id =req.params.id 
        const bloged = await Blog.findOne({_id: id}).exec() //findOne คือการค้นหาไฟลเดียว _idด้วยid
        res.send(bloged)
    } catch (error) {
        console.log(error)
    }
}
exports.update = async (req,res)=>{
    try {
        const id = req.params.id
        const updated = await Blog
            .findOneAndUpdate({ _id: id }, req.body, { new: true })
            .exec()
        res.send(updated)
    } catch (error) {
        console.log(error)
    }
}
exports.remove = async (req,res)=>{
    try {
        const id = req.params.id
        const removed =await Blog.findOneAndDelete({_id:id}).exec()
        
        res.send(removed)
    } catch (error) {
        console.log(error)
    }
}

