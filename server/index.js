const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDB = require('./fake-db')

const productRoutes = require('./routes/products')

mongoose.connect(config.DB_URI)
  .then(() => {
    const fakedb = new FakeDB();
    fakedb.initDb()
  });

const app = express()

app.use('/api/v1/products',productRoutes)

app.use(express.json());  

const PORT = process.env.PORT || '3001'

app.listen(PORT,function() {
    console.log("I am running")
})