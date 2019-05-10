import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  games: [ {type : mongoose.Schema.ObjectId, ref : 'Game'} ],
})

export default mongoose.model('Category', CategorySchema)

