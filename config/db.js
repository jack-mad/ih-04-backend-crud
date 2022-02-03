const mongoose = require('mongoose')

//funcion
const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI),{
            useNewUrlParser : true,
            useUnifiedTopology: true
        }
        
        return console.log("base de datos conectada correctamente");
    } catch (error) {
        console.log(error)
		return process.exit(1) // MATA LA INSTANCIA DE NODEJS HACIA ESE CLIENTE
    }
}

//exportacion
module.exports = connectDB;