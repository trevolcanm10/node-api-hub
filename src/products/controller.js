const createError= require('http-errors');//Importamos el paquete http-error para el manejo de errores HTTP
const debug = require('debug')('app:module-products-controller');//app module-products-controller --> Indica desde que lugar viene los errores
const {ProductsService} = require('./services')
const { Response } = require('../common/response');//Importamos el objeto que maneja respuestas unificadas como success,error
//Exportamos ProductsController para que otros archivos puedan usarlo
//Creamos un controlador de productos
//GET/api/products --> El controlador regresa todo los productos
module.exports.ProductsController = {
    
    getProducts:async(req,res)=> {
        try{
            let products = await ProductsService.getAll();
            Response.success(res,200,'Lista de productos',products);//Responde en formato json la lista de los productos que se ha pedido
        }catch(error){
            debug(error);
            Response.error(res);
        }
    },//Obtener todo los productos
    
    getProduct:async(req,res) =>{
        try{
         const {
            params:{id},
         } = req;//Extrae la id de los productos de la URL
         let product = await ProductsService.getById(id);
         if(!product){
            Response.error(res,new createError.NotFound());
         }else{
            Response.success(res,200,`Producto ${id}`,product);
         }
         
        }catch(error){
            debug(error);
            Response.error(res);
        }

    },//Obtener un producto en específico
    createProduct:async(req,res)=> {
        try{
            const {body} = req;
            if(!body || Object.keys(body).length===0){
                Response.error(res,new createError.BadRequest());
            }else{
                const insertedId = await ProductsService.create(body);
                Response.success(res,201,'Producto agregado',insertedId);
            }
        }catch(error){
            debug(error);
            Response.error(res);
        }
    },//Crear un producto
}