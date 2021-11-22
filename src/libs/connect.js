const MongoClient = require('mongodb').MongoClient
const uri ="mongodb+srv://eddmon18:Programador24@clustercertus.jpqhw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

let client;

module.exports = function(){
    if(!client){
        try{
            client = new MongoClient(uri,{userNewUrlParser:true,useUnifiedTopolgu:true});
        } catch(e){
            console.log("Error al conectarse a la BD", e)
        }
    }
    return client;
}