const { json } = require('express');
const express = require('express');
const app = express();

//definimos motor de plantillas en este caso ejs
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views')

//esta linea de codigo es necesaria para ller los datos obtenidos en el formularo
app.use(express.urlencoded({extended:false}));
app.use(express(json));

//despues definimos nuestras rutas en el archivo router
//he importamos las rutas
app.use('/',require('./router'));

//despues de importar las rutas, creamos la conexion con la bd
//en la carpeta database


//le asignamos el host
app.listen(3500, ()=>{
    console.log('SERVER RUN IN PORT 3500 http://localhost:3500')
});