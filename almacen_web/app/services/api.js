app
.factory("API", function($resource ) {
	var url="http://localhost:8000/";
    return {
        Categoria:  $resource(url+'productos/categorias/:id/', {'id': '@id'},
        {
            'update': { method:'PUT' },
            'list': { method:'GET', isArray : true, params: {} },
        })

    };
})

.factory("CategoriaXXX",function function_name ($http) {
	var url="http://localhost:8000/productos/categorias/";
	return {
		"list": function () {
			return $http.get(url).then(function (r) {
				return r;
			});
		},
		"create":function (d) {
			return $http.post(url,d).then(function (r) {
				return r;
			});
		},
		"get":"list",
		"update":function (id, d) {
			return $http({
				method:"PUT",
				data: d,
				url:url+d.id+"/",

			}).then(function (r) {
				return r;
			});
		},
		"delete":function (d) {
			return $http.delete(url+d.id+"/").then(function (r) {
				return r;
			});
		},
	};
});