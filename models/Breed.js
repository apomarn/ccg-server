const mongoose = require('mongoose')

const Schema = mongoose.Schema

const petSchema = new Schema({
  image: String,
  breed: String,
  description: String,
  history: String,
  color: String,
  temperament: String,
  adaptability: {
    apartment: String,
    owners: String,
    alone: String,
    weather: String,
    friendly: String
  },
  exercise: {
    energy: String,
    exercise: String,
    playfulness: String
  },
  trainability: String,
  barking: String
})

const Breed = mongoose.model('Breed', petSchema)

module.exports = Breed
