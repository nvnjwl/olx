(function(){
	'use strict';
	var app=angular.module("mymap",[]);
	app.controller("mapcontroller",function($scope){
		
		$scope.data="welcome";
		$scope.submitCurrent=function(){
			//alert("Function");
			var city=document.getElementById("cityname").value;
			var category=document.getElementById("category").value;
			var subcategory=document.getElementById("subcategory").value;
			alert("Function"+city+category+subcategory);
		}
		
	});
})();