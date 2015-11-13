app

.controller("categoriaController", function ($scope, API) {
		$scope.list=[];

		$scope.listar = function  () {

			API.Categoria.list().then(function (r) {
				$scope.list=r.data;
			}, function (err) {
				console.log("Error: " + err);
			});
		};
		$scope.listar();

		$scope.get = function  (d) {

			$scope.categoria = d;
		};

		$scope.save = function  () {
			if($scope.categoria.id){
				API.Categoria.update({ id: "" }, $scope.categoria).then(function (r) {
					console.log("update "+r.data);
					$scope.listar();
				}, function (err) {
					console.log("Error: " + err);
				});
			}else{
				API.Categoria.create($scope.categoria).then(function (r) {
					console.log(r.data);
					$scope.listar();
				}, function (err) {
					console.log("Error: " + err);
				});
			}
		};

		$scope.delete = function  (d) {

			API.Categoria.delete({ id: d.id }).then(function (r) {
				console.log(r.data);
				$scope.listar();
			}, function (err) {
				console.log("Error: " + err);
			});
		};




		});