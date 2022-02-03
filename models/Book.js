//los modelos tienen 4 secciones

//importacion
const mongoose = require('mongoose')

//esquema
const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true
    }
})
//modelos
const Book = mongoose.model('Book',bookSchema)

//exportacion
module.exports = Book;