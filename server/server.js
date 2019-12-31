const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')
const path = require('path')
const schema = require('./graphql/schema')
const cors = require('cors')
const app = express()

// Connect to DB
mongoose.connect('mongodb://joseph:joseph94@ds359298.mlab.com:59298/bookstore', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err.message))

// Cors middleware
app.use(cors())

// GraphQL middleware
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})