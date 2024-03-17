const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Error connecting to mongoDb');
});

connection.on('connected', () => {
    console.log('Mongo Db Connection successful');
});

module.exports = mongoose;