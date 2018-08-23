export default class Activity {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.goalId = data.goalId
    this.userId = data.userId
  }
}