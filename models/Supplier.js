const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SupplierSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  email: String
}, {
  timestamp: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = mongoose.model('Supplier', SupplierSchema)