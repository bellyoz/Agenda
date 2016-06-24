var app = angular.module('app',[]);

app.controller('PersonaCtrl' , function($scope){
	$scope.personas = [
		{nombre: "mario" , telefono: "1234567" , email: "mario@gmail.com"},
		{nombre: "Carlos" , telefono: "7654321" , email: "carlos@gmail.com"},
		{nombre: "Mime" , telefono: "7658453" , email: "mime@gmail.com"},
		{nombre: "Cami" , telefono: "2453467" , email: "cami@gmail.com"}
	];

	$scope.Save= function(){
		$scope.personas.push(
			{nombre: $scope.nuevaPersona.nombre , telefono: $scope.nuevaPersona.telefono , email : $scope.nuevaPersona.email }
		);
		$scope.formVisibility = false;
		console.log($scope.formVisibility)
	}
	$scope.formVisibility = false;
	$scope.showForm = function(){
		$scope.formVisibility = true;
		console.log($scope.formVisibility)
	}



})

