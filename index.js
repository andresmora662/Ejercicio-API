//1.Importar Express
const express = require ("express");
//2. instanciar express
const app = express();
//3.funciones especiales -middleware
app.use(express.json());
//4.creacion de rutas
app.get("/", (request,response)=> {
response.json({
    mensaje:"bienvenido a la api de andres mora"
})
});

const PORT = 3005
app.listen(PORT,(param)=>{
    console.log("servidor conectado " + PORT)
})