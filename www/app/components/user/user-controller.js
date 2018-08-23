import Store from "../../store/store.js";

let store = new Store()

let elem = document.getElementById('app')

function draw() {
  elem.innerText = store.state.user.username
}

export default class UserController {
  constructor() {
    draw()
  }


}