const mongoose = require('mongoose')

const Schema = mongoose.Schema

const breedSchema = new Schema({
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

const Breed = mongoose.model('Breed', breedSchema)

module.exports = Breed
