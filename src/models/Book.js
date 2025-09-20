import mongoose from "mongoose"
import { authorSchema } from "./Author.js"

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    publisher: { type: String, required: true },
    price: { type: Number, required: true },
    pages: { type: String, required: true },
    genre: { type: String, required: true },
    image: { type: String, required: true },
    blurb: { type: String, required: true },
    author: authorSchema
}, {
    timestamps: false,
    versionKey: false
})

const book = mongoose.model("books", bookSchema)

export default book