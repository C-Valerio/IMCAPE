const { render } = require('ejs');
const fs = require('fs')
const express = require('express')
const router = express.Router()
// const client = require('../libs/connect')()

router.get('/contact',(req,res)=>{
    res.render('contact')
})

router.get('/', (req,res) => {
    res.render('index')
    
})

router.get('/reporte',(req,res) =>{
    res.send("<h1>Pagina del Reporte</h1>")
})

router.post('/consultar',(req,res) =>{
    res.send("{frutas:['manzana','pera','fresa']}")
})

router.delete('/eliminar',(req,res) =>{
    res.send("Eliminado")
})

router.post('/insertar',(req,res)=>{
    client.connect(async(err)=>{
        if(!err){
            const collection = client.db("test").collection("alumno")
            collection.insertOne(req.body)
            res.send("resultado:[{'respuesta':'ok'}]")
        }else{
            res.send("resultado:[{'respuesta':'Error al cargar'},{'mensaje':" + err + "}]")
        }
    })
   // res.send(req.body.curso)//
})

router.post('/listarAlumnos',(req,res) =>{
    client.connect(async (err) => {
        if(!err){
            const collection = client.db("test").collection("alumno")
            collection.find().toArray((err,result)=>{
                if(!err){
                    //res.send(result)
                    res.render('listarAlumnos',{datos:result})
                }else{
                    res.send("'resultado':[{'respuesta':'Error al traer la data'},{'mensaje':" + err + "}]")
                }
            })  
        }else{
            res.send("resultado:[{'respuesta':'Error al conectar a DB'},{'mensaje':" + err + "}]")
        }
    })
})

router.post('/listarUnAlumno',(req,res) =>{     //console.log(nombre)
    var nombreLocal = req.body.nombre;
    client.connect(async (err) => {
        if(!err){
            const collection = client.db("test").collection("alumno")
            collection.find({nombre:{$ed:nombreLocal}}).toArray((err,result)=>{
                if(!err){
                    //res.send(result)
                    res.render('listarAlumnos',{datos:result})
                }else{
                    res.send("'resultado':[{'respuesta':'Error al traer la data'},{'mensaje':" + err + "}]")
                }
            })  
        }else{
            res.send("resultado:[{'respuesta':'Error al conectar a DB'},{'mensaje':" + err + "}]")
        }
    })
})

module.exports = router;

