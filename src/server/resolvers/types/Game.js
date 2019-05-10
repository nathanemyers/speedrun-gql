import mongoose from 'mongoose'

import Category from '../../db/models/Category'
import Run from '../../db/models/Run'

export default {
  id: ({_id}) => {
    return _id 
  },

  categories: async ({ categories }) => {
    return await Category.find({
      '_id': { 
        $in: categories.map(category => mongoose.Types.ObjectId(category))
      }
    })
  },

  runs: async ({ _id }, { limit }) => {
    return await Run.find({
      game: mongoose.Types.ObjectId(_id),
    })
      .sort({time: 1})
      .limit(limit)
  },
}
