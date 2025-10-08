const express = require('express');

const {ProductsController} = require('./controller');

const router = express.Router();//Router nos permite manejar las rutas
//Exportamos la funcion ProductsAPi , de manera que otroas archivos puedan usarlo
module.exports.ProductsAPI = (app) =>{
    router
        .get('/',ProductsController.getProducts)//Accedemos al controlador  y sus propiedades--Traemos todos los productos de la base de datos
        .get('/:id',ProductsController.getProduct)//Accedemos al controlador y sus propiedades --Traemos un producto específico
            //http://localhost:3000/api/products/
            //http://localhost:3000/api/products/23
        .post('/',ProductsController.createProduct);//Accedemos al controlador y creamos un producto
        //Peticion post generalmente para crear un nuevo producto

    app.use('/api/products',router);//Las rutas especificadas en router serán manejadas por /api/products
};