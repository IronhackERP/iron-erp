const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  supplier: [{ type: Schema.Types.ObjectId,  ref: 'Supplier' }]
})

module.exports = mongoose.model('Product', ProductSchema)