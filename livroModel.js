const mongoose = require('mongoose')

const LivroSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  numeroDePaginas: {
    type: Number,
    required: true
  },
  categoria: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('livro', LivroSchema)