//ROUTER SETUP
//=================================
var express = require('express');
var router = express.Router();

//EXTERNAL FILES
//=================================
var Job = require('../models/job.js');

router.get('/', function(req, res){
  var query = Job.find({});
  query.then(function(jobs) {
    res.json({jobs: jobs})
  })
  .catch(function(err){
    res.json(500, `ERROR: ${err}`)
  })
});


module.exports = router;
