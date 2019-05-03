import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  categories: [ {type : mongoose.Schema.ObjectId, ref : 'Category'} ],
})

export default mongoose.model('Game', GameSchema)

