const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  rol:{type: String, enum: ['admin', 'employee'], default: 'employee'}
}, {
  timestamp: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('User', UserSchema)
