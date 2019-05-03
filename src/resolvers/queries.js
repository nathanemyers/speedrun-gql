import Player from '../db/models/Player'
import Game from '../db/models/Game'
import Category from '../db/models/Category'

export default {
  players: () => {
    return Player.find()
  },
  games: () => {
    return Game
      .find()
      .populate('categories')
      .exec()
  },
  categories: () => {
    return Category
      .find()
      .populate('games')
      .exec()
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
