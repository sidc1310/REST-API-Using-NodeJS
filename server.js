const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const app=express()

const url = "mongodb://localhost:27017/mydatabase"
mongoose.connect(url, { useNewUrlParser: true })

var db = mongoose.connection;

db.on('open',()=>{
    console.log("Connected to DB !")
})

db.on('close',()=>{
    console.log("Disconnected from DB !")
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const studentRouter = require('./routes/Students_route')
app.use('/students', studentRouter)

const Teacherrouter = require('./routes/Teachers_route')
app.use('/teachers', Teacherrouter)

//Added to avoid some error
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello World at /")

})

app.listen(9000,()=>{
    console.log("Started Listening on port 9000 !")
})

