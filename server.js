const express = require('express')

require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const app = express()
const port = process.env.PORT || 5500
app.listen(port, () => {
    console.log('Server running in port %d', port)
})