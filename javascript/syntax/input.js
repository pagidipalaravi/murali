function myAddition(){
	var Number1 = document.getElementById('value1').value;
	var Number2 = document.getElementById('value2').value;
	var sum = Number(Number1) + Number(Number2);
	document.getElementById('total').innerHTML = sum;
	
}
function myCancatination1(){
var name1 = document.getElementById('name1').value;
	var name2 = document.getElementById('name2').value;
	var sum = String(name1) + String(name2);
	document.getElementById('addition').value = sum;
}