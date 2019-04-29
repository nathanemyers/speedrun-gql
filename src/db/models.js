import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
})

export const Player = mongoose.model('Player', PlayerSchema)

