require('dotenv').config();//Aquí indicamos que se lea el contenido del archivo.env

module.exports.Config = {
    port:process.env.PORT,
    mongoUri:process.env.MONGO_URI,
    mongoDbname:process.env.MONGO_DBNAME,
}