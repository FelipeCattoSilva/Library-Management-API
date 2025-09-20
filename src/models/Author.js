import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    bio: { type: String, required: true },
}, {
    timestamps: false,
    versionKey: false
})

const author = mongoose.model("authors", authorSchema)

export { author, authorSchema }