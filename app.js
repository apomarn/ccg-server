const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const Pet = require('./models/Pet')
const Breed = require('./models/Breed')

const server = express()

const PORT = process.env.PORT || 5000

server.use(cors())
server.use(bodyParser.json())

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

server.post('/allpets', (req, res) => {
  let pup = new Pet(req.body)
  console.log(req.body)
  pup
    .save()
    .then(pup => {
      res.json(pup)
    })
    .catch(err => {
      console.error('Error saving a pup', err)
    })
})

server.get('/allbreeds', (req, res) => {
  Breed.find()
    .then(breeds => {
      res.json(breeds)
    })
    .catch(err => {
      console.error('Error getting all breeds', err)
    })
})

server.post('/allbreeds', (req, res) => {
  let breed = new Breed(req.body)
  console.log(req.body)
  breed
    .save()
    .then(breed => {
      res.json(breed)
    })
    .catch(err => {
      console.error('Error saving a breed', err)
    })
})
