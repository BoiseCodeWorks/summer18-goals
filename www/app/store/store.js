import User from "../models/user.js";
import Goal from "../models/goal.js";

let store

//SINGLE SOURCE OF TRUTH
let state = {
  user: {},
  activeGoal: {},
  goals: [],
  activites: []
}

function setState(prop, data) {
  state[prop] = data
  console.log(state)
}

export default class Store {
  getGoals(draw) {
    fetch('/api/goals/by-user/' + state.user._id)
      .then(res => res.json())
      .then(data => {
        setState('goals', data.map(goal => new Goal(goal)))
        draw()
      })
  }
  login(creds, draw) {
    fetch('/auth/login', {
        method: 'post',
        body: JSON.stringify(creds),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
      .then(res => res.json())
      .then(data => {
        setState('user', new User(data))
        draw()
      })
      .catch(console.error)
  }
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