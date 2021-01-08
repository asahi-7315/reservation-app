const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  // author: ObjectId,
  coverImage: String,
  name: { type: String, required: true, max: [60,'最大60文字まで'] },
  price: Number,
  description: String,
  head1: String,
  head2: String,
  head3: String,
});

module.exports = mongoose.model('Product', ProductSchema);