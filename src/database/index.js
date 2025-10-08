const {MongoClient} = require('mongodb');//Extraemos la herramienta MongoClient
const debug = require('debug')('app:module-database'); //Debug permite visualizar en consola los resultados de la operacion
const {Config} = require('../config/index')
//app:module-database etiqueta que nos muestra de que parte del programa vienen los mensajes
var connection = null;//variable nulo de conexion
//Modulo de exportacion cuyo nombre es Database, se exporta para que esta pueda ser usada por otros archivos
//Recibe como parámetro collection
module.exports.Database = (collection) => new Promise(async(resolve,reject) => {
    try{
      
       if(!connection){
        //Creamos un nuevo cliente MongoDB
        const client = new MongoClient(Config.mongoUri);
        //Esperamos que el cliente se conecte a MongoDB
        connection = await client.connect();
        debug('Nueva conexion realizada con MongoDB Atlas')
       }
       debug('Reutilizando conexion');
       //Obtenemos la base de datos del cliente creado 
       const db = connection.db(Config.mongoDbname);
       resolve(db.collection(collection))
    }catch(error){
        reject(error);
    }

})
