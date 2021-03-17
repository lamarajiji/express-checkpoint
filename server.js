//import express module
const express=require('express')
const path=require('path')

//instance of express
const app=express()
//Middleware
const check=require('./middleware/datecheck')
app.use(check)
//app.use(express.static('public'))

//route
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/services',(req,res)=>{
    res.sendFile(__dirname + '/public/services.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/style.css')
})

//create a server
const port=3001
app.listen(port, error =>{
    error ?
    console.log(error)
    :
    console.log(`server running on port ${port}...`)
})