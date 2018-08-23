import Store from "../../store/store.js";

let store = new Store()

function draw() {
  let template = ''
  store.state.goals.forEach(goal => template += goal.listTemplate)
  document.getElementById('goals').innerHTML = template
}

export default class GoalsController {
  getGoals() {
    store.getGoals(draw)
  }

}