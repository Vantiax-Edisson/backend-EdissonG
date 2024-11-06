import 'dotenv/config.js'
import '../../config/database.js'
import Post from '../Post.js'

let posts =  [
    {
      title: "Ola k ase",
      content: "ola k ase es una prueba",
      user:"67086a005c6214f3eb33f70a"
    }
  ]

Post.insertMany(posts)