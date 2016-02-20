(function(){
    angular.module("FormBuilderApp")
        .factory("UserService",UserService);

    function UserService($http)
    {
         $scope.users =
             [
             {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                 "username":"alice",  "password":"alice",   "roles": ["student"]},
             {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                 "username":"bob",    "password":"bob",     "roles": ["admin"]},
             {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",
                 "username":"charlie","password":"charlie", "roles": ["faculty"]},
             {	"_id":456, "firstName":"Dan",              "lastName":"Craig",
                 "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
             {	"_id":567, "firstName":"Edward",           "lastName":"Norton",
                 "username":"ed",     "password":"ed",      "roles": ["student"]}
             ];

        $scope.findUserByUsernameAndPassword=findUserByUsernameAndPassword;
        $scope.findAllUsers=findAllUsers;
        $scope.createUser=createUser;
        $scope.deleteUserById=deleteUserById;
        $scope.updateUser=updateUser;

        function findUserByUsernameAndPassword(username, password, callback)
        {

        }

        function findAllUsers(callback)
        {

        }

        function createUser(user, callback)
        {

        }

        function deleteUserById(userId, callback)
        {

        }

        function updateUser(userId, user, callback)
        {

        }
    }
})()