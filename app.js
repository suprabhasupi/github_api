(function() {
    var app = angular.module('github', ['ngMaterial', 'ngResource', 'ngRoute', 'ngStorage']);
    app.factory('githubFactory', function($resource) {
  return $resource('https://api.github.com/users/:id', { id: '@_id' });
});








    app.controller('githubController', ['$scope', '$localStorage', '$sessionStorage', '$mdToast','githubFactory',
        function($scope, $localStorage, $sessionStorage, $mdToast,githubFactory) {

        	$scope.userList = $localStorage.userList||[];
            $scope.name = "supi";
            // $scope.ud = githubService.getUser("karanisverma");
            // console.log("UD => ", $scope.ud);
            $scope.id ='karanisverma';

// $scope.entry = githubFactory.get({ id: $scope.id }, function(data) {
//   // $scope.entry is fetched from server and is an instance of Entry
//   $scope.data = data;
//   console.log("d", data);
//   $scope.entry.$update(function() {
//     //updated in the backend
//   });
// });
$scope.remove = function(index) {
	// $scope.x =  $localStorage.userList;
 //            $scope.x.splice(index, 1);
 //            $localStorage.userList=$scope.x;
            $localStorage.userList.splice(index, 1);
            console.log("refresh function called");
            // cartService.refresh();
        };


$scope.getUser = function(){
$scope.entry = githubFactory.get({ id: $scope.id }, function(data) {
  // $scope.entry is fetched from server and is an instance of Entry
  $scope.data = data;
  console.log("d", data);
});
$scope.userList.push($scope.entry);

$localStorage.userList = $scope.userList;
}
        }
    ]);

})();
