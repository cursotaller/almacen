app

.controller("categoriaController", function ($scope, API) {
		$scope.d_list=[];

		$scope.listar = function  () {

			API.Categoria.list().$promise.then(function (r) {
				$scope.d_list=r;
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
				API.Categoria.update({ id: $scope.categoria.id }, $scope.categoria).$promise.then(function (r) {
					console.log("update "+r);
					$scope.listar();
				}, function (err) {
					console.log("Error: " + err);
				});
			}else{
				API.Categoria.save($scope.categoria).$promise.then(function (r) {
					console.log(r);
					$scope.listar();
				}, function (err) {
					console.log("Error: " + err);
				});
			}
		};

		$scope.delete = function  (d) {

			API.Categoria.delete({ id: d.id }).$promise.then(function (r) {
				console.log(r);
				$scope.listar();
			}, function (err) {
				console.log("Error: " + err);
			});
		};




		});