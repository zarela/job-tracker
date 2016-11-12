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

router.get('/:jobId', function(req, res){
  Job.findOne({_id: req.params.jobId})
  .then(function(job){
    res.json({job: job});
  })
  .catch(function(err){
    res.json(500, `ERROR: ${err}`)
  });
});

//Creating a new job
router.post('/', function(req, res){
  var newJob;

  Job.create({
    position: req.body.position,
    company: req.body.company,
    jobLink: req.body.jobLink,
    applied: req.body.applied || false,
    createdAt: new Date(),
    updatedAt: new Date(),
    notes: req.body.notes
  })
  .then(function(job){
    console.log('New job created --->', job)
    newJob = job;
  })
  .then(function(){
    return Job.find({}).exec();
  })
  .then(function(jobs){
    console.log('All jobs so far --->', jobs)
    res.json({jobs: jobs, job: newJob});
  })
  .catch(function(err){
    res.json(400, err)
  })
});

//Updating a job
router.put('/:jobId', function(req, res){
  var editedJob;

  Job.update({_id: req.params.jobId}, req.body)
  .then(function(){
    return Job.find({}).exec();
  })
  .then(function(jobs){
    console.log('All jobs --->', jobs);
    res.json({message: "Successfully Updated", jobs: jobs})
  })
  .catch(function(err){
    res.json(400, err)
  });
})

//Deleting a job
router.delete('/:jobId', function(req, res){
  var jobs;

  var query = Job.remove({_id: req.params.jobId})
    query.then(function(){
      return Job.find({}).exec();
    })
    .then(function(jobs){
      console.log('All jobs --->', jobs)

      res.json({message: "Successfully Deleted", jobs: jobs})
    })
    .catch(function(err){
      res.json(400, err)
    });
});

module.exports = router;
