//importamos el modulo mysql
const mysql = require('mysql');

//creamos la conexion y sus variables
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud3_nodejs_bd'
});

//hacemos la conexion
conexion.connect((error)=>{
    if(error){
        console.log(error);
    }
    console.log('Conexion EXITOSA a la BD');
});

//exportamos la conexion al documento router.js
module.exports=conexion;