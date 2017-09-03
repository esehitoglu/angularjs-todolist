var app = angular.module("app" , []);

app.controller("gorevListesi" , function($scope){
   $scope.liste = [
      { "ad": "YAPILACAK 1" , "onay": false},
      { "ad": "YAPILACAK 2" , "onay": false},
      { "ad": "YAPILACAK 3" , "onay": true},
      { "ad": "YAPILACAK 4" , "onay": false},
      { "ad": "YAPILACAK 5" , "onay": false}
   ]

   $scope.yeniGorev = function(){
      $scope.liste.push({
         "ad" : $scope.gorevEkle,
         "onay" : false
      });
      $scope.gorevEkle = "";
   }

   $scope.gorevSil = function(){
      $scope.liste = $scope.liste.filter(function(index) {
         return !index.onay;
      });
   }

});
