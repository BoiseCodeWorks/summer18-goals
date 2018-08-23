export default class Goal {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.userId = data.userId
  }
}