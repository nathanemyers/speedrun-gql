import mongoose from 'mongoose'

import Game from '../../db/models/Game'

export default {
  id: ({_id}) => {
    return _id 
  },

  games: async ({ games }) => {
    return Game.find({
      '_id': { 
        $in: games.map(game => mongoose.Types.ObjectId(game))
      }
    })
  },
}
