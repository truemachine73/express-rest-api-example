const express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/Product')
const productRoutes = require('./router/product')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(productRoutes)

async function start() {
    try {
      await mongoose.connect(
        // УКАЗАТЬ ПУТЬ ДО MongoDB
        '',
        {
          useNewUrlParser: true,
          useFindAndModify: false
        }
      )

      app.listen(port, () => {
        console.log('Server has been started...')
      })
    } catch (e) {
      console.log(e)
    }
  }
  
  start()