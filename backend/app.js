const express = require('express');
const app = express();

const errorMiddleware = require('./middleware/error')


app.use(express.json());

// Route import 
const product = require("./routes/productRoutes")


app.use('/api/v1',product)

// Middleware For Error
app.use(errorMiddleware)


module.exports = app;