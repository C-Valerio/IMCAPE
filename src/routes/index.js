const { render } = require('ejs')
const fs = require('fs')
const express = require('express')
const router = express.Router()
// const client = require('../libs/connect')()

router.get('/', (req,res) => {
    res.render('index') 
})
router.get('/contacto',(req,res)=>{
    res.render('contacto')
    

})

router.get('/productos',(req,res) =>{
    res.render("productos")
})
router.get('/noticias',(req,res) =>{
    res.render("noticias")
})
router.get('/servicios',(req,res) =>{
    res.render("servicios")  
})
router.post('/insertar', (req,res) =>{
    res.send(req.body.nombre)
})

module.exports = router;

