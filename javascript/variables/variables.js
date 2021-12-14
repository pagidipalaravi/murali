function demo1(){ 
	var x = 98764;
	var y = 98543;
	var z = x + y;
	document.getElementById('demo').innerHTML=z;
}
function cost1(){
	var cost1 = 45689;
	var cost2 = 98654;
	var total = cost1 + cost2;
	document.getElementById('cost').innerHTML=total;
}
function datatype1(){
	var x = 100;
	var firstName = "murali"; // <br> tag is used here
	var lastName = 'krishna';
	document.getElementById('datatype').innerHTML= firstName + "<br>" +  lastName + "<br>" + x;	
}
function undefined1(){
	var carName ; // undefined value
		document.getElementById('undefined').innerHTML=carName;
	var laptopBrand = "dell"; // defined value
	document.getElementById('element').innerHTML= laptopBrand;
	
}
function declareMultipleVariables(){
	var x = 555;
	var bikeName = "yamaha";
	var carBrand = 'BMW';
	document.getElementById('declare').innerHTML= bikeName;
}
function reDeclare1(){
	var carVarient = "maruthi800"; //Re-Declaration method by using "var" variable
	var carVarient;
	document.getElementById('reDeclare').innerHTML= carVarient;
}
function arithmetic1(){
	var x = 123 + 458 + 987;
	var y = 9 + 10 + "car"; // String type
	var z = "8" + 10 + 15; // String type
	document.getElementById('arithmetic').innerHTML= x;
	document.getElementById('string').innerHTML= y;
	document.getElementById('string1').innerHTML= z;
}
function underScore1(){
	var _x = 99;
	var _carCost = 550000;
	document.getElementById('underScore').innerHTML= _carCost;
}