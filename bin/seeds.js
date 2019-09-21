const mongoose = require('mongoose')
const path = require('path')

const dbName = 'Pets'
mongoose.connect(`mongodb+srv://apomarn:11pomar00@cluster0-nr2dd.mongodb.net/pets?retryWrites=true${dbName}`)

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

const Pets = [
  {
    name: 'Genky',
    type: 'Dog',
    breed: 'Brazilian Mastiff',
    gender: 'Male'
  },
  {
    name: 'Blacky',
    type: 'Dog',
    breed: 'Chihuahua',
    gender: 'Male'
  }
]
