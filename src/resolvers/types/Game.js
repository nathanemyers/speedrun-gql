import mongoose from 'mongoose'

import Category from '../../db/models/Category'
import Run from '../../db/models/Run'

export default {
  id: ({_id}) => {
    return _id 
  },

  categories: async ({ categories }) => {
    return Category.find({
      '_id': { 
        $in: categories.map(category => mongoose.Types.ObjectId(category))
      }
    })
  },

  runs: async ({ runs }, { limit }) => {
    return Run.find({
      '_id': { 
        $in: runs.map(run => mongoose.Types.ObjectId(run))
      },
      sort: {
        time: 'asc'
      },
      limit: limit,
    })
  },
}
