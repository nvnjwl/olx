(function () {
	'use strict';
	var app = angular.module("mymap", []);
	app.controller("mapcontroller", function ($scope,$http) {

		$scope.data = "welcome";
		$scope.cities=[];
		$scope.category=[];
		$scope.subcategory=[];
		
		$scope.submitCurrent = function () {
			//alert("Function");
			var city = document.getElementById("cityname").value;
			var category = document.getElementById("category").value;
			var subcategory = document.getElementById("subcategory").value;
			alert("Function" + city + category + subcategory);
		}

		$http({
			url: 'http://jsonstub.com/data',
			method: 'GET',
			dataType: 'json',
			data: '',
			headers: {
				'Content-Type': 'application/json',
				'JsonStub-User-Key': '34e5429c-43a1-4485-9423-70ac4e393ba9',
				'JsonStub-Project-Key': 'f3b71264-4952-4db0-a7a4-ea183e4cedcd'
			}
		}).success(function (data, status, headers, config) {
			//console.log(JSON.stringify(data, null, 4));
		}).error(function(){
			console.log("Some Error Came");
		});

		$http({
			url: 'cityname.json',
			method: 'GET',
			dataType: 'json',
			data: ''
		}).success(function (data, status, headers, config) {
			//console.log(JSON.stringify(data, null, 4));
			$scope.cities=data.cityname;
		}).error(function(){
			console.log("Some Error Came");
		});

		$http({
			url: 'category.json',
			method: 'GET',
			dataType: 'json',
			data: ''
		}).success(function (data, status, headers, config) {
			//console.log(JSON.stringify(data, null, 4));
			$scope.category=data.category;
		}).error(function(){
			console.log("Some Error Came");
		});
		
		$http({
			url: 'subcategory.json',
			method: 'GET',
			dataType: 'json',
			data: ''
		}).success(function (data, status, headers, config) {
			//console.log(JSON.stringify(data, null, 4));
			$scope.subcategory=data.subcategory;
		}).error(function(){
			console.log("Some Error Came");
		});
		

	});
})();