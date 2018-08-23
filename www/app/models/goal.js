//VIEW MODEL
export default class Goal {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.userId = data.userId
  }

  get listTemplate() {
    return `
    <div class="goal">
      ${this.description}
    </div>
    `
  }

  get detailsTemplate() {
    return `
    <div>
      <h1>
        ${this.description}
      </h1>
      <div id="activities"></div>
    </div>
    `
  }


}