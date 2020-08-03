const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const app=express()
const router = express.Router()
const Student = require('../models/students_schema.js')

const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/',async(req,res)=>{
    try{
    //res.send("Hello World at /Students")
    const stud = await Student.find()
    res.json(stud)
    } 
    catch(err){
        res.send(err)
    }
})

router.get('/:id',jsonParser,async(req,res)=>{
    try{
  
    const stud = await Student.findById(req.params.id)
    res.json(stud)
    } 
    catch(err){
        
        res.send(err)
    }
})

router.post('/',jsonParser, async(req,res)=>{
    try{
        const stud = new Student({
            name : req.body.name,
            present : req.body.present
        })
        
        const s = await stud.save()
        res.json(s)
    }
    catch(err){
        res.send(err)
    }
})

router.patch('/:id', jsonParser, async(req,res)=>{

    try{
        const stud = await  Student.findById(req.params.id)
        stud.present = req.body.present
        const s = await stud.save()
        res.send(s)

    }
    catch(err){
        res.send(err)
    }

})

router.delete('/:id',jsonParser, async(req,res)=>{
    try{
        console.log("Reached here")
        const stud = await Student.findById(req.params.id)
        const s = await stud.remove()
        console.log("Reached here below savee")
        res.json(s)
    }
    catch(err){
        console.log("Inside Catch of Post")
        res.send(err)
    }
})


module.exports = router


