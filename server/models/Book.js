const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    name: { type: String, required: [true, 'Please add a name'] },
    genre: { type: String, required: [true, 'Please add a genre'] },
    author: { type: Schema.Types.ObjectId, ref: 'Author' }
})

module.exports = mongoose.model('Book', BookSchema)