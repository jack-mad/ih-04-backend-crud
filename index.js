// ./index.js

// 1. IMPORTACIONES
const express			= require("express")
const app				= express()
const hbs = require("hbs")
const connectDB			= require("./config/db")




// 2. MIDDLEWARES
require("dotenv").config()

connectDB()

app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views',__dirname+'/views')

app.use(express.urlencoded({ extended: true }) ) //permite enviar los datos de formulario en json

// 3. RUTEO
app.use("/", require("./routes/index"))
app.use("/books",require("./routes/books"))



// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en puerto ${process.env.PORT}`))          