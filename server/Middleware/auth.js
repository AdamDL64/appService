
const jwt = require('jsonwebtoken')

const User =require('../Models/Users')

exports.auth = async (req, res, next) => {
    try {
        //code
        const token = req.headers["authtoken"]  //เช็คtokenหน้าบ้านว่าส่งมาไหม
        if (!token) {
            return res.status(401).send('No token')
        }
        const decoded = jwt.verify(token, 'jwtsecret')  //ถ้ามี check token
        req.user = decoded.user
        
        next();
    } catch (err) {
        // err
        console.log(err)
        res.send('Token Invalid').status(500)
    }
}

exports.adminCheck = async (req,res,next) =>{
    try {
        console.log(req.user)
        const userAmin =await User.findOne({name:req.user.name})
        .select('-password')
        .exec()
        if(userAmin.role !== 'admin'){
            res.status(403).send('Admin acess Denoed!!!')
        }else{
            next()
        }

        console.log(userAmin)
    } catch (error) {
        console.log("Error adminCheck",error)
        res.status(403).send('admin access denied !!!')
    }
}