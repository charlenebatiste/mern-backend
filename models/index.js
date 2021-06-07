require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

//  set up an event for db to print connection

db.once('open', () => {
    console.log(`You are connected to MongoDB at ${db.host}: ${db.port}`);
})

db.on('error', (error) => {
    console.log(`Database error:`, error);
})

// import all models below
const User = require('./User')
const Book = require('./Book')

// export all models from this file

module.exports = {
    User,
    Book
}