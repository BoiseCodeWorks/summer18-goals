import Store from "../../store/store.js";

let store = new Store()

let elem = document.getElementById('app')

function draw() {
  elem.innerHTML =
    `
  <div>
    <h1>${store.state.user.username}</h1>
    <button onclick="app.controllers.goals.getGoals()">MY GOALS</button>
    <div id="goals"></div>
  </div>
  `

}

export default class UserController {
  constructor() {

  }

  login(e) {
    e.preventDefault();
    let creds = {
      username: e.target.username.value,
      pin: e.target.pin.value
    }
    store.login(creds, draw)

  }


}