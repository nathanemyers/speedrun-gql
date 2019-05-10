import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const RunSchema = new Schema({
  time: {
    type: Number,
    required: true,
  },
  player: {
    type : mongoose.Schema.ObjectId, 
    ref : 'Run',
    required: true,
  },
  game: {
    type : mongoose.Schema.ObjectId, 
    ref : 'Run',
    required: true,
  },
})

export default mongoose.model('Run', RunSchema)

