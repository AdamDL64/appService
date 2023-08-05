const express = require('express')
const cors = require('cors')
require("dotenv").config()
const connectDB = require('./Config/db')
const bodyParse =require('body-parser')
const morgan = require('morgan')

// const blogRouters = require('./Routes/blog')  แบบที่2

const app = express()
//connect DataBase as mogooseDB 
connectDB()

const { readdirSync } = require('fs')

//middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'}))


//routeแบบที่2

// app.use('/api', blogRouters )

// Routes 3 auto ที่อยู่ในfolder Routesทั้งหมด
readdirSync('./Routes')
    .map((r) => app.use('/api', require('./Routes/' + r)))


const port = process.env.PORT||8000
app.listen(port, () => console.log(`Example app listening on  Server port  ${port}!`))