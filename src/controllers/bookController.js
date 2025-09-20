import mongoose from 'mongoose'
import book from '../models/Book.js'
import { author } from '../models/Author.js'

class BookController {
    static async listBooks(req, res) {
        try {
            const getBooks = await book.find({})
            res.status(200).json(getBooks)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async findBook(req, res) {
        try {
            const bookId = req.params.id
            const bookData = await book.findById(bookId)
            res.status(200).json(bookData)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async updateBook(req, res) {
        try {
            const bookId = req.params.id
            await book.findByIdAndUpdate(bookId, req.body)
            res.status(200).json(req.body)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async createBook(req, res) {
        const newBookData = req.body
        try {
            const authorFound = await author.findById(newBookData.author)
            const newBook = { ...newBookData, author: { ...authorFound._doc } }
            const createdBook = await book.create(newBook)
            res.status(201).json({ message: "Book created!", data: createdBook })
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async deleteBook(req, res) {
        try {
            const bookId = req.params.id
            await book.findByIdAndDelete(bookId)
            res.status(200).send(`Book deleted!`)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async findBookBy(req, res) {
        const publisher = req.query.publisher
        const author = req.query.author
        const genre = req.query.genre
        try {
            let resData
            if (publisher) resData = await book.find({ publisher: publisher })
            if (genre) resData = await book.find({ genre: genre })
            if (author) resData = await book.find({ 'author._id': author })

            res.status(200).json({ message: `Book(s) found!`, data: resData })
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }
}

export default BookController