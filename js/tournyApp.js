angular.module("tournyApp", ["ui.router", "firebase"])
  .constant("fb", {
    url: "https://ninetales.firebaseio.com/"
  })
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "/js/homeTmpl.html",
        controller: "homeCtrl"
      })
      .state("entry", {
        url: "/home/entry",
        templateUrl: "/js/entryTmpl.html",
        controller: "homeCtrl"
      })
      .state("tournament", {
        url: "/home/tournament",
        templateUrl: "js/tournamentTmpl.html",
        controller: "tournamentCtrl"
      })
  })
