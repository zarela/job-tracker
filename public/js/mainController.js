(function(){
  angular.module('job')
  .controller('MainCtrl', function($http, $state){

    var self = this;

    $http.get('/jobs')
    .then(function(response){
      // console.log("Self works")
      self.jobs = response.data.jobs
    })
    .catch(function(err){
      console.log(err)
    });

  //Keeping Track of App State
  //============================
  this.isCreating = false;
  this.isEditing = false;
  this.editedJob = null;

  function startCreating(){
    this.isCreating = true;
    this.isEditing = false;
  }

  function startEditing(){
    this.isCreating = false;
    this.isEditing = true;
  }

  function setJobToEdit(job){
    this.editedJob = job;
  }

  function reset(job){
    this.isCreating = false;
    this.isEditing = false;
  }

  //CRUD LOGIC
  //==========================

  //NEW JOB
  function addJob(newJob){
    // console.log(newJob);

    $http.post('/jobs', newJob)
    .then(function(response){
      // console.log(response)
      self.jobs = response.data.jobs;
      //Clearing form ''
      newJob.position = '';
      newJob.company = '';
      newJob.jobLink = '';
      newJob.applied = false;
      newJob.notes = '';
    })
    .catch(function(err){
      console.log(err)
    });
  }

  //DELETE JOB
  function deleteJob(id){
    console.log(id);
    $http.delete(`/jobs/${id}`)
    .then(function(response){
      console.log(response);
      self.jobs = response.data.jobs
    })
  }

  //UPDATE
  function editJob(job){
    console.log('editing')
    $http.put(`/jobs/${job._id}`, job)
    .then(function(response){
      console.log(response);
      self.jobs = response.data.jobs;
    })
    this.isEditing = false;
  }

   //Public Methods
   //==============================
  this.startCreating = startCreating;
  this.addJob = addJob;
  this.deleteJob = deleteJob;
  this.startEditing = startEditing;
  this.setJobToEdit = setJobToEdit;
  this.editJob = editJob;
  this.reset = reset;

  });

})();
