(function() {
    var app = angular.module('github', ['ngMaterial', 'ngResource', 'ngRoute', 'ngStorage']);
    app.factory('githubFactory', function($resource) {
        return $resource('https://api.github.com/users/:id', { id: '@_id' });
    });


    app.controller('githubController', ['$scope', '$localStorage', '$sessionStorage', '$mdToast', 'githubFactory',
        function($scope, $localStorage, $sessionStorage, $mdToast, githubFactory) {

            $scope.userList = $localStorage.userList || [];
            $scope.userExist = false;
            $scope.name = "supi";
            $scope.id = '';
            $scope.sortName = function() {
                $scope.sortVal = 'name';
            }
            $scope.sortLocation = function() {
                $scope.sortVal = 'location';
            }
            $scope.sortFollowers = function() {
                $scope.sortVal = 'followers';
            }


            // $scope.$watch('id', function() {
            //     $scope.getUser();
            // });


            $scope.remove = function(index) {
                $localStorage.userList.splice(index, 1);
                console.log("refresh function called");

            };


            $scope.getUser = function() {
                $scope.entry = githubFactory.get({ id: $scope.id }, function(data) {
                    $scope.data = data;
                    console.log("d", data);
                });


            angular.forEach($scope.userList, function(val) {
                               if ($scope.id == val.login) {
                                   // $scope.result = val;
                                   $scope.userExist = true;
                               }
                               });
              if($scope.userExist){
                   $mdToast.show(
                            $mdToast.simple()
                            .textContent('User Exists!')
                            .position('top left')
                            .hideDelay(3000)
                        );
              }
              else{
                $scope.userList.push($scope.entry);
                $localStorage.userList = $scope.userList;}
            }





        }
    ]);

})();
