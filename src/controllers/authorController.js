import mongoose from 'mongoose'
import { author } from '../models/Author.js'

class AuthorController {
    static async listAuthors(req, res) {
        try {
            const getAuthors = await author.find({})
            res.status(200).json(getAuthors)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async findAuthor(req, res) {
        try {
            const authorId = req.params.id
            const authorData = await author.findById(authorId)
            res.status(200).json(authorData)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async updateAuthor(req, res) {
        try {
            const authorId = req.params.id
            await author.findByIdAndUpdate(authorId, req.body)
            res.status(200).json(req.body)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async createAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body)
            res.status(201).json({ message: "Author added!", data: newAuthor })
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const authorId = req.params.id
            await author.findByIdAndDelete(authorId)
            res.status(200).send(`Author deleted!`)
        } catch (err) {
            res.status(500).json({ message: "Internal server error.", data: err })
        }
    }
}

export default AuthorController