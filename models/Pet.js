const mongoose = require('mongoose')
// const express  = require('express');
const Schema = mongoose.Schema

const petSchema = new Schema({
  name: String,
  type: String,
  breed: String,
  gender: String
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet
