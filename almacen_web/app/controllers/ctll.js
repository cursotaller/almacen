app

.controller("ctll", function ($scope) {
		//$scope.nombre="Miguel";
		$scope.saludo = function  () {
			console.log("Hola "+$scope.nombre);
		}
		$scope.list=[
					    {
					        "id": 2,
					        "codigo": "x",
					        "nombre": "xx",
					        "activo": true,
					        "fecha": "2015-11-08T15:31:08Z"
					    },
					    {
					        "id": 3,
					        "codigo": "www",
					        "nombre": "x",
					        "activo": false,
					        "fecha": null
					    },
					    
					]
	});