
const { get } = require('express/lib/response');
const res = require('express/lib/response');
const Book = require('../models/Book')

exports.getBooks = async (req,res) => {
    
    try {
        const foundBooks = await Book.find({})
        
        res.render("books/list",{
            data: foundBooks
        })
    } catch (error) {
        console.log(error)
    }  
}

exports.createBooks = async (req,res) => {
    
    return res.render("books/create")
}

exports.createBooksForm = async (req,res) => {
    console.log('Enviando datos del formulario')
    const { title, description, author, rating } = req.body; //en vez de const title = req.body.title

    //crear el documento en base de datos del

    try {
         await Book.create({ title, description, author, rating })
    

    res.redirect("/books")
    } catch (error) {
        console.log(error);
    }
    

    //console.log(title)
}

exports.getSingleBook =async (req,res) => {

    //identificar el libro por su id
    
    const { bookID } =req.params;
    console.log(bookID);
    // realiza busqueda del libro individual a travez de su id
    const getTheBook = await Book.findById(bookID);
    console.log(getTheBook);

    res.render("books/single",{
        book: getTheBook
    })
}