var q1;
var q2;

function saveQuestion1(){
	q1 = document.getElementById("field1").value;
	localStorage.setItem('question1', q1);
}

function saveQuestion2(){
	q2 = document.getElementById("field2").value;
	localStorage.setItem('question2', q2);
}

function saveQuestion3(){
	q3 = document.getElementById("field2").value;
	localStorage.setItem('question3', q3);
}