//imortamos la base de datos del archivo db, y lo guardamos en una const conexion 
//que es la misma que exportamos en el archivo db
const { query } = require('express');
const conexion = require('../database/db');

//capturamos los datos de la pestaña create despues de presionar el boton Guardar
//los metodos son funciones dentro de las rutas por eso no va en el archivo ruta
//estos se llama metodo y es el de agregar
exports.add= (req, res)=>{
    const name= req.body.name;
    const adress = req.body.adress;
    const phone= req.body.phone;

    conexion.query('INSERT INTO customer SET ?', {name, adress, phone}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}

//metodo delete
exports.delete = (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM customer WHERE id=?', [id], (error, result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
};

//metodo Edit aparecen datos en el formulario
exports.edit = (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM customer WHERE id =?',[id], (error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.render('edit',{user:result[0]})
        }
    })
}

//metodo edit se editan los datos del formulario
exports.update=(req, res)=>{
    const id = req.params.id;
    //estas tres lineas de codigo es para obtener los datos de los inputs 
    const name= req.body.name;
    const adress = req.body.adress;
    const phone= req.body.phone;

    //tambiuen se puede hacer de esta manera en una sola linea
    //const clienteEdit= req.body;

    conexion.query('UPDATE customer SET ? WHERE id=?', [{name,adress,phone},id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}
