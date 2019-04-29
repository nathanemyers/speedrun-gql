import uuidv4 from 'uuid/v4'
import { Player } from '../db/models'

export default {
  createPlayer: async (_, args) => {
    const player = new Player()
    player.id = uuidv4()
    player.name = args.name
    await player.save()
    return {
      id
    }
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
