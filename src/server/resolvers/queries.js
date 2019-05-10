import mongoose from 'mongoose'
import { countBy, sortBy } from 'lodash'

import Player from '../db/models/Player'
import Game from '../db/models/Game'
import Category from '../db/models/Category'
import Run from '../db/models/Run'

export default {
  players: (_, { name }) => {
    const filter = {}
    if (name) {
      filter.name = name
    }
    return Player.find(filter)
  },
  games: (_, { name }) => {
    const filter = {}
    if (name) {
      filter.name = name
    }
    return Game.find(filter)
  },
  categories: (_, { name }) => {
    const filter = {}
    if (name) {
      filter.name = name
    }
    return Category.find(filter)
  },

  player: (_, { id }) => {
    return Player.findById(id)
  },
  game: (_, { id }) => {
    return Game.findById(id)
  },
  category: (_, { id }) => {
    return Category.findById(id)
  },

  // sorry this is very hacky
  topPlayers: async (_, { categoryId, limit }) => {
    const category = await Category
      .findById(categoryId)
      .populate('games')
      .exec()

    const games = category.games

    const runs = await Run.find({
      'game': { 
        $in: games.map(game => mongoose.Types.ObjectId(game._id))
      }
    })

    const runsByPlayer = countBy(runs, (run) => run.player)

    const list = Object.keys(runsByPlayer)
      .map(key => ({ player: key, count: runsByPlayer[key] }))

    const topPlayers = sortBy(list, ['count'])
      .map(item => item.player)
      .slice(0, limit)

    return Player.find({
      '_id': { 
        $in: topPlayers.map(player => mongoose.Types.ObjectId(player))
      }
    })
  },
}
