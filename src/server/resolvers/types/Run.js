import Game from '../../db/models/Game'
import Player from '../../db/models/Player'

export default {
  id: ({_id}) => {
    return _id 
  },

  game: async ({ game }) => {
    return await Game.findById(game)
  },

  player: async ({ player }) => {
    return await Player.findById(player)
  },
}
