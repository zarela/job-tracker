var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  position: String,
  company: String,
  jobLink:  String,
  interestLevel: Number,
  applied: Boolean,
  createdAt: Date,
  updatedAt: Date,
  notes: String
});

module.exports = mongoose.model('Job', jobSchema);
