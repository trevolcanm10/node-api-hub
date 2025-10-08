const express = require('express');//Importamos Express para crear servidores web y APIs fácilmente
const debug = require('debug')("app:main");//Importamos la libreria debug para mostrar mensajes en la consola con el filtro-main

const {Config} = require('./src/config/index');//Contiene la configuración del proyecto
const {ProductsAPI} = require('./src/products/index');

const app = express();//Crea el servidor - cuyo nombre es app

//Decimos que nuestro servidor entiendo datos en formato JSON
app.use(express.json());


ProductsAPI(app);//Manejo de las rutas creadas en products

//Iniciamos el servidor en el puerto que colocamos en el archivo de configuracion
app.listen(Config.port,() => {
    debug(`Servidor escuchando en el puerto ${Config.port}`);
});