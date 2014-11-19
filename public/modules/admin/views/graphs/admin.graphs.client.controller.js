
(function () {

  function graphsController(scope) {

    scope.greeting = "Resize the page to see the re-rendering";
    scope.data = [
      {name: "Greg", score: 98},
      {name: "Ari", score: 96},
      {name: 'Q', score: 75},
      {name: "Loser", score: 48}
    ];

  }

  angular.module('admin')
    .controller('graphsController', ['$scope', graphsController])

}());