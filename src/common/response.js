const createError = require('http-errors');//Importamos para crear objetos de error HTTP con un código de estado

//Creamos el objeto llamado Response para que pueda ser usado en otros archivos
//Posee 2 funciones success,error
module.exports.Response = {
    // 
    success:(res,status = 200, message="ok", body ={}) =>{
        res.status(status).json({message,body});
    },
    error:(res,error = null) => {
        const {statusCode, message } = error 
            ? error
            :new createError.InternalServerError();
        res.status(statusCode).json({message});
    }
}