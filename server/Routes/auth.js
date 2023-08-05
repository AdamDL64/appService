const express = require('express')
const router = express.Router()
//controller
const { register,
        login,
        currentUser,
        } = require('../Controller/auth')

 //import middleware
const {auth ,adminCheck} =require('../Middleware/auth')

// http://localhost:5000/api
router.post('/register',register)
router.post('/login',login )
router.post('/current-user',auth,currentUser )
router.post('/current-admin',auth, adminCheck ,currentUser )


module.exports = router