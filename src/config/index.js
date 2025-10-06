require('dotenv').config();//Aquí indicamos que se lea el contenido del archivo.env

module.exports.Config = {
    port:process.env.PORT,
}