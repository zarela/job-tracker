var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  position: String,
  company: String,
  jobLink:  String,
  applied: Boolean,
  createdAt: Date,
  notes: String
});

module.exports = mongoose.model('Job', jobSchema);
