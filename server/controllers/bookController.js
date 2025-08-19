const Book = require('../models/Book');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const addBook = async (req, res) => {
    console.log(req.body)
    const { title, author, status } = req.body;
    if (!title || !author) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    try {
        const newBook = new Book({ title, author, status });
        const book = await newBook.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const updateBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        await book.deleteOne(); // Use deleteOne() on the document instance
        res.json({ message: 'Book removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
};

