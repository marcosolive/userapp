const mongoose = require('mongoose');

async function connect(){
  await mongoose.connect('mongodb+srv://admin:oliv3ira@cluster0.qjym3.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })
  console.log('Database ok')
}

module.exports ={connect}