(function(){
  angular
  .module('job', ['ui.router'])
  .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: "homeDNU.html",
  })

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }); //end of locationProvider

  } //end of routes
})();
