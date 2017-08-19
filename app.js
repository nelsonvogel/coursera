(function(){
	'use strict';
	angular.module('myApp', [])
	.controller('myController', function($scope)
	{
		$scope.name = "Teste Nelson";
		
	});
})();

var student = 
{
	name: "",
	type: "student"
};

document.addEventListener('DOMContentLoaded', contendLoaded);

function contendLoaded(event)
{
	document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event)
{
	calculateNumericOutput();
}

function calculateNumericOutput()
{
	student.name = document.getElementById('name').value;
	var totalNameValue = 0;
	for(var i=0; i<student.name.length; i++)
	{
		totalNameValue += student.name.charCodeAt(i);
	}
	document.getElementById('output').innerText = 'Total num' + totalNameValue;
}