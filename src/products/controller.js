const debug = require('debug')('app:module-products-controller');//app module-products-controller --> Indica desde que lugar viene los errores
const {ProductsService} = require('./services')
//Exportamos ProductsController para que otros archivos puedan usarlo
//Creamos un controlador de productos
//GET/api/products --> El controlador regresa todo los productos
module.exports.ProductsController = {
    
    getProducts:async(req,res)=> {
        try{
            let products = await ProductsService.getAll();
            res.json(products);//Responde en formato json la lista de los productos que se ha pedido
        }catch(error){
            debug(error);
            res.status(500).json({message:"Internal server error"});
        }
    },//Obtener todo los productos
    
    getProduct:async(req,res) =>{
        try{
         const {
            params:{id},
         } = req;//Extrae la id de los productos de la URL
         let product = await ProductsService.getById(id);
         res.json(product);
        }catch(error){
            debug(error);
            res.status(500).json({message:"Internal server error"});
        }

    },//Obtener un producto en específico
    createProduct:async(req,res)=> {
        try{
            const {body} = req;
            const insertedId = await ProductsService.create(body);
            res.json(insertedId);
        }catch(error){
            debug(error);
            res.status(500).json({message:"Internal server error"});
        }
    },//Crear un producto
}