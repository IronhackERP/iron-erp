const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema ({
  username: {type: String, required: true},
  firstName: String,
  lastName: String,
  email: {type: String, required: true},
  password: {type: String, required: true},
  rol: {type: String, enum: ['admin', 'employee'], default: 'employee'}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('User', UserSchema)
