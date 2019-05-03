import Player from '../db/models/Player'

export default {
  players: () => {
    return Player.find()
  },
  games: () => {
    return [{}]
  },
  categories: () => {
    return [{}]
  },

  player: () => {
    return {}
  },
  game: () => {
    return {}
  },
  category: () => {
    return {}
  },
}
