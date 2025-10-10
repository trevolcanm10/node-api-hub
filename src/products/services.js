const { ObjectId } = require('mongodb');//Mongodb identifica cada producto con el ObjectId

const {Database} = require('../database/index');//Importamos la funcion Database

const COLLECTION =  'products';//MongoDB almacena los datos en colecciones(tablas), con esto llamaremos a la coleccion products


const getAll = async () => {
    const collection = await Database(COLLECTION);//Llamamos a la funcion Database - pasamos el parámetro COLLECTION
    return await collection.find({}).toArray();//find busca,toArray -> convierte todo en una lista
    //Regresamos una lista con todo los productos
};

const getById = async(id) =>{
    const collection = await Database(COLLECTION);
    return collection.findOne({_id:new ObjectId(id)});//Busca un producto en específico en base a su identificador
};
const create = async (product) =>{
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);//Crea un nuevo producto
    return result.insertedId//Regresa el id del producto que se acaba de crear
};


module.exports.ProductsService = {
    getAll,
    getById,
    create
}