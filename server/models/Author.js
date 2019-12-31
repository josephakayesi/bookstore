const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    name: { type: String, required: [true, 'Please add a name'] },
    age: { type: Number, required: [true, 'Please add age'] },
})

module.exports = mongoose.model('Author', AuthorSchema)
