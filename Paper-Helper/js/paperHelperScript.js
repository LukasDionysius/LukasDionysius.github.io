function saveQuestion1(){
	var q1 = document.getElementById("field1").value;
	localStorage.setItem('question1', q1);
	var question = sessionStorage.getItem('question1');
	console.log(question);
}

function updateQuestionHeader(){
	var question = sessionStorage.getItem('question1');
	document.getElementById("question").innerHTML = question;
	console.log(question);
}


function saveQuestion2(){
	var q2 = document.getElementById("field2").value;
	localStorage.setItem('question2', q2);
}

function saveQuestion3(){
	var q3 = document.getElementById("field2").value;
	localStorage.setItem('question3', q3);
}