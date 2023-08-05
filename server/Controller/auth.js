const User = require('../Models/Users')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
const { token } = require('morgan')



//register
exports.register = async(req,res)=>{
try {
        // 1.CheckUser ตรวจสอบว่ามีid มี id อยุแล้วไหม ถ้ามีก็ไห้แจ้งเตือน
        const { name, password ,role } = req.body
        var user = await User.findOne({ name })
        if (user) {
            return res.send('User Already Exists!!!').status(400)
        }

        // 2.Encrypt กรณีที่ยังไมมี สร้างรหัส โดยใช้เจ้าตัวbcry[t]
        const salt = await bcrypt.genSalt(10)
        user = new User({
            name,
            password,
            role
        })
        user.password = await bcrypt.hash(password, salt)
        console.log(user)

        // 3.Save
        await user.save()
        res.send('Register Success!!')

} catch (error) {
    console.log(error)
    res.status(500).send('server Error')
}
}
// login
exports.login = async (req, res) => {
    try {
        //code
        // 1. Check User  
        const { name, password } = req.body  //ดึงข้อมูล
        var user = await User.findOneAndUpdate({ name }, { new: true })  //
        console.log(user)
        if (user) {   
            const isMatch = await bcrypt.compare(password, user.password) //ถ้ามี userตรวจสอบpassword ตรงไหม
                
            if (!isMatch) {
                return res.status(400).send('Password Invalid!!!') //ถ้า password ไมตรงก็จบตรงนี้
            }
            // 2. Payload   stepที่2 ถ้าตรวยสอบตรง  เตรียมให้ข้อมูลที่payload ส่งไปหน้าบ้าน
            var payload = {
                user: {
                    name: user.name,
                    role: user.role

                }
            }
            // 3. Generate
            jwt.sign(payload, 'jwtsecret', { expiresIn: "1h" }, (err, token) => {
                if (err) throw err;
                res.json({ token, payload })
            })
        } else {
            return res.status(400).send('User not found!!!')
        }
        console.log(password)

    } catch (err) {
        //code
        console.log(err)
        res.status(500).send('Server Error')
    }
}


//checktoken ว่าหมดอายุหรือยัง
exports.currentUser = async(req,res)=>{
    try {
        //select เอาไวเลือกที่ไมไห้ส่งไปแสดง
        //req.user ดูที่middlerware คือ decode
        console.log('currentUser',req.user)
        const user =await User.findOne({name:req.user.name})
        .select('-password')   
        .exec()
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("Error server currentUser")
    }
}