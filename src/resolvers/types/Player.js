import Run from '../../db/models/Run'

export default {
  id: ({_id}) => {
    return _id 
  },

  runs: async ({ _id }) => {
    return await Run.find({ player: _id })
  }
} 
