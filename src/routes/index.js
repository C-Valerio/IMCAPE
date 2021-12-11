const { render } = require('ejs')
const fs = require('fs')
const express = require('express')
const { Router } = require('express')
const router = express.Router()
const client = require('../libs/connect')()


router.get('/', (req, res) => {
    res.render('index')
})
router.get('/index', (req, res) => {
    res.render('index')
})
router.get('/contacto', (req, res) => {
    res.render('contacto')
})
router.get('/productos', (req, res) => {
    res.render("productos")
})
router.get('/carrito', (req, res) => {
    res.render("carrito")
})
router.get('/noticias', (req, res) => {
    res.render("noticias")
})
router.get('/servicios', (req, res) => {
        res.render("servicios")
    })
    // router.post('/insertar', (req,res) =>{
    //     client.connect(async (err)=>{
    //         if(!err){
    //         const collection = client.db("test").collection("alumno")
    //         collection.insertOne(req.body)
    //         res.send("resultado:[{'respuesta':'ok'}]")
    //     } else{
    //         res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err +"}]")}
    //     })
    // })

router.post('/contacto', (req, res) => {
    client.connect(async(err) => {
        if (!err) {
            const collection = client.db("test").collection("alumno")
            collection.insertOne(req.body)
            res.render("contacto")
        } else {
            res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err + "}]")
        }
    })
})
router.post('/listarAlumnos', (req, res) => {
        client.connect(async(err) => {
            if (!err) {
                const collection = client.db("test").collection("alumno")
                collection.find().toArray((err, result) => {
                    if (!err) {
                        res.send(result)
                            // res.render('/contacto', {datos:result})
                    } else {
                        res.send("'resultado':[{'respuesta':'Error al cargar'},{'mensaje':" + err + "}]")
                    }
                })
            } else {
                res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err + "}]")
            }
        })
    })
    // router.post('/contacto', (req,res) =>{
    //     client.connect(async (err)=>{
    //         if(!err){
    //         const collection = client.db("test").collection("alumno")
    //         collection.find().toArray((err,result)=>{
    //             if(!err){
    //                 res.render('contacto',{datos:result})
    //             }else{
    //                 res.send("'resultado':[{'respuesta':'Error al cargar'},{'mensaje':" + err +"}]")
    //             }
    //         })
    //     } else{
    //         res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err +"}]")
    //     }
    //     })
    // })

module.exports = router;