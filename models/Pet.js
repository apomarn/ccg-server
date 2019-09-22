const mongoose = require('mongoose')

const Schema = mongoose.Schema

const petSchema = new Schema({
  name: String,
  type: String,
  breed: String,
  gender: String,
  image: {
    type: String,
    default: '/images/puppies.jpg'
  }
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet
