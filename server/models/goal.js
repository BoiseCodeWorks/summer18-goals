//DATA MODEL
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId;
let schemaName = 'Goal'


let schema = new Schema({
  description: {
    type: String
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  }
})


module.exports = mongoose.model(schemaName, schema)