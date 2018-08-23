import UserController from "./components/user/user-controller.js";
import GoalsController from "./components/goal/goals-controller.js";

class App {
  constructor() {
    this.controllers = {
      user: new UserController,
      goals: new GoalsController
    }
  }
}

window.app = new App