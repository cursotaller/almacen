app

.controller("categoriaController", function ($scope, Categoria) {
		$scope.list=[];

		$scope.list = function  () {

			Categoria.list().then(function (r) {
				$scope.list=r.data;
			}, function (err) {
				console.log("Error: " + err);
			});
		};
		$scope.list();
		});