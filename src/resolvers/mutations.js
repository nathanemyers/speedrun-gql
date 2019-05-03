import Player from '../db/models/Player'

export default {
  createPlayer: async (_, { name }) => {
    const player = new Player()
    player.name = name
    await player.save()
    return player
  },
  createGame: () => {
    return {}
  },
  createCategory: () => {
    return {}
  },
  createRun: () => {
    return {}
  },
  addCategoryToGame: () => {
    return {}
  },
}
