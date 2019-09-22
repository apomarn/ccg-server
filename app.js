const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')

const Pet = require('./models/Pet')

const server = express()

const PORT = process.env.PORT || 5000

server.use(cors())

server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)

  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log('Connected to Mongo!')
    })
    .catch(err => {
      console.error('Error connecting to mongo', err)
    })
})

server.get('/allpets', (req, res) => {
  Pet.find()
    .then(pets => {
      res.json(pets)
    })
    .catch(err => {
      console.error('Error getting all pets', err)
    })
})
