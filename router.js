const express =require ('express');
const router = express.Router();

//imprtamos los metodos del archivo crud
const crud = require('./controllers/crud');
const { Router } = require('express');

const conexion = require('./database/db');//importamos la conexion mysql a este archivo

//conectamos con la ruta la conexion y mostramos los datos de la BD
router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM customer', (error,result)=>{
        if(error){
            console.log(error)
        }else{
            res.render('index',{result:result});
        }
    })
});

//ruta create
router.get('/create',(req,res)=>{
    res.render('create');
});


//ruta delete
router.get('/delete/:id', crud.delete);

//ruta edit
router.get('/edit/:id', crud.edit);


//utilizamos el metodo importado del archivo crus
router.post('/add', crud.add);

//utilizamos el metoto importado del archivo crud edit
router.post('/update/:id', crud.update);



//exportamos este documento a app.js
module.exports=router;