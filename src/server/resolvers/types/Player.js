import mongoose from 'mongoose'

import Run from '../../db/models/Run'

export default {
  id: ({_id}) => {
    return _id 
  },

  runs: async ({ _id }, { limit }) => {
    return await Run.find({
      player: mongoose.Types.ObjectId(_id),
    })
      .sort({time: 1})
      .limit(limit)
  }
} 
