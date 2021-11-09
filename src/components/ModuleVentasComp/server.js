const express = require("express");
const app = express()
import { MongoClient } from "mongodb";

const stringConexion = "mongodb+srv://admin:admin@moduloventas.pjmp6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(stringConexion, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

let conexion;

const  main = ()=> {
    client.connect((err,db)=>{
        if(err){
            console.error("Error conectando a la base de datos")
            return false;
        }
    conexion = db.db("cuenta");
    console.log("Conexión exitosa")
    })
    return app.listen(5000,()=>{
        console.log("escuchando puerto 5000")
    });
}

main();

app.post("/cuenta/nuevo", (req, res) =>{
    console.log(req);
    const datoscuenta = req.body;
    console.log("llaves: ", Object.keys(datoscuenta));
    try {
        if (
            Object.keys(datoscuenta).includes("Producto") &&
            Object.keys(datoscuenta).includes("Color") &&
            Object.keys(datoscuenta).includes("Talla") &&
            Object.keys(datoscuenta).includes("Nombre") &&
            Object.keys(datoscuenta).includes("Documento") &&
            Object.keys(datoscuenta).includes("Cantidad") &&
            Object.keys(datoscuenta).includes("date") &&
            Object.keys(datoscuenta).includes("Descuento") &&
            Object.keys(datoscuenta).includes("Username") 
        ){
            conexion.collection("cuentaventa").insertOne(datoscuenta, (err,result)=> {
                if(err){
                    console.error(err)
                    res.sendStatus(200);
                }else {
                    console.log(result)
                    res.sendStatus(500);
                }
            } )

            res.sendStatus(200);
        } else {
            res.sendStatus(500);
        }
    } catch {
        res.sendStatus(500);
    }
});