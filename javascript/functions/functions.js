function myFunction(){
	document.getElementById('a').innerHTML = adding(999, 888);
}
function adding(a, b){
	let x = (a + b);
	return x;
}
function addition(a,b){
	let z = (4 + 5);
	//console.log(z);
	alert(z);
}
function plus(){
	let number1 = document.getElementById('num').value;
	let number2 = document.getElementById('num1').value;
	sum = Number(number1) + Number(number2);
	document.getElementById('element').innerHTML = sum;
	
}

