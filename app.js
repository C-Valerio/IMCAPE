const path = require ("path")
const express =require("express")
const logger = require ("morgan")
const bodyParse = require("body-parser")
const app = express()
const indexRoutes = require("./src/routes/index")

app.set("port",process.env.PORT ||3000)
app.set("views",path.join(__dirname,"src/views"))
app.engine('html', require('ejs').renderFile)
app.set("view engine","ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(bodyParse.urlencoded({extended:false}))

app.use("/",indexRoutes)

app.listen(app.get("port"),() => {
    console.log("Servidor en Puerto",app.get("port"))
})
