let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId;
let schemaName = 'Activity'


let schema = new Schema({
  description: {
    type: String
  },
  goalId: {
    type: ObjectId,
    ref: 'Goal',
    required: true
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
})


module.exports = mongoose.model(schemaName, schema)