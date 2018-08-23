let store

//SINGLE SOURCE OF TRUTH
let state = {
  user: {
    username: 'Jimbob'
  },
  activeGoal: {},
  goals: [],
  activites: []
}

export default class Store {
  //SINGLETON
  constructor() {
    if (store) {
      return store
    }
    store = this
  }
  get state() {
    return {
      ...state
    }
  }

}