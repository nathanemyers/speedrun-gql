import Player from '../db/models/Player'
import Game from '../db/models/Game'
import Category from '../db/models/Category'
import Run from '../db/models/Run'

export default {
  createPlayer: async (_, { name }) => {
    const player = new Player()
    player.name = name
    await player.save()
    return player
  },

  createGame: async (_, { name }) => {
    const game = new Game()
    game.name = name
    await game.save()
    return game
  },

  createCategory: async (_, { name }) => {
    const category = new Category()
    category.name = name
    await category.save()
    return category
  },

  createRun: async () => {
    const run = new Run()
    run.name = name
    await run.save()
    return run
  },

  addCategoryToGame: async (_, { gameId, categoryId }) => {
    const game = await Game.findById(gameId)
    const category = await Category.findById(categoryId)
    game.categories.push(category)
    category.games.push(game)

    await game.save()
    await category.save()

    return {
      game,
      category,
    }
  },
}
