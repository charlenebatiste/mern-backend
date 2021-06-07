// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const { Book } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log(`inside of /api/books`)
    try {
        const allBooks = await Book.find({});
        res.json({ books: allBooks })
    } catch (error) {
        console.log(`Error inside of /api/books`);
        console.log(error);
        return res.status(400).json({ message: `books not found. please try again.` })
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for book based on id
        const book = await Book.findById(id);
        res.json({ book });
    } catch (error) {
        console.log(`error inside of /api/books/:id`)
        console.log(error)
        return res.status(400).json({ message: `book not found. try again...` })
    }
}

const create = async (req, res) => {
    try {
        const newBook = await Book.create(req.body)
        console.log(`new book created`, newBook)
        res.json({ book: newBook });
    } catch (error) {
        console.log(`error inside of POST of /api/books`)
        console.log(error)
        return res.status(400).json({ message: `book was not created. please try again...` })
    }
}

const update = async (req, res) => {

}

const deleteBook = async (req, res) => {

}


// GET api/books/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Books endpoint OK!' });
});

// GET -> /api/books/
router.get('/', passport.authenticate('jwt', { session: false }), index); //requires a login in user to see this page

// GET --> /api/books/:id
router.get('/:id', passport.authenticate('jwt', { session: false }), show);

// POST -> /api/books
router.post('/', passport.authenticate('jwt', { session: false }), create);

// router.put('/books/:id', passport.authenticate('jwt', { session: false }), update);
// router.delete('/books/:id', passport.authenticate('jwt', { session: false }), deleteBook);

module.exports = router;