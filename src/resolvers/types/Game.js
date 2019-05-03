//import Category from '../db/models/Category'
//import Run from '../db/models/Run'

export default {
  id: ({_id}) => {
    return _id 
  },

  categories: ({ categories }) => {
    return categories
  },

  runs: ({ runs }) => {
    return runs
  },
}
