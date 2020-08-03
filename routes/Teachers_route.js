const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const app=express()
const router = express.Router()
const Teacher = require('../models/teachers_schema')

const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', async(req,res)=>{
    try{
    const teacher = await Teacher.find()
    res.json(teacher)
    }
    catch(err){
        res.send(err)
    }

})

router.get('/:id', async(req,res)=>{
    try{
    const teacher = await Teacher.findById(req.params.id)
    res.json(teacher)
    }
    catch(err){
        res.send(err)
    }

})

router.post('/',jsonParser, async(req,res)=>{

    try{
        const t = new Teacher({
            name : req.body.name,
            subject : req.body.subject
        })

        const t1 = await t.save()
        res.json(t1)
    }
    catch(err){
        console.log("Inside Catch of Post")
        res.send(err)
    }

})

router.patch('/:id',jsonParser, async(req,res)=>{

    try{
        const teacher = await Teacher.findById(req.params.id)
        teacher.subject = req.body.subject
        const t = await teacher.save() 
        res.json(t)

    }
    catch(err){
        res.send(err)
    }
})


router.delete('/:id',jsonParser, async(req,res)=>{
    try{
        
        const teacher = await Teacher.findById(req.params.id)
        const t = await teacher.remove()
       
        res.json(t)
    }
    catch(err){
        
        res.send(err)
    }
})

module.exports = router