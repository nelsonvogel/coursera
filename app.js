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

var i=0;
function calculateNumericOutput()
{
	student.name = document.getElementById('name').value;
	document.getElementById('output').value = '4545' + i++;
}