const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product = require('./Product')
const User = require('./User')

const ClientSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  address: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  productsList: [ { type: Schema.Types.ObjectId,  ref: 'Product' } ],
  employeeVendor: [ { type: Schema.Types.ObjectId,  ref: 'User' } ]
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Client', ClientSchema)