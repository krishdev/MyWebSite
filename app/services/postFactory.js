mainModule.factory('postContact', function($http) {
    return {
        postData: function(data) {
            return $http.post("myfirstfile.php", data);
        },
		postSomething : function(data){
			return $http.post("myfirstfile.php", data);
		}
    }
});