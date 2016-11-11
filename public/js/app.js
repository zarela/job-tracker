(function(){
  angular.module('job', []).controller('MainCtrl', function($http){

  var self = this;

  $http.get('/jobs')
  .then(function(response){
    console.log("Self works")
    self.jobs = response.data.jobs
  })
  .catch(function(err){
    console.log(err)
  });

//Keeping Track of App State
//============================
this.isCreating = false;

function startCreating(){
  this.isCreating = true;
}

//CRUD Logic
//==========================
function addJob(newJob){
  console.log(newJob);

  $http.post('/jobs', newJob)
  .then(function(response){
    console.log(response)
    self.jobs = response.data.jobs;
    newJob.description = '';
  })
  .catch(function(err){
    console.log(err)
  });
}


  }); //End
})();

console.log("It works!");
