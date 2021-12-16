function number(){
	let a = 123;// number type
	let b = 124.5;// decimal type
	let c = "datatype";// String type
	let d = {firstname:"murali", lastname:"krishna"};// object type
	let e = 10 + 789 + "mobile";
	let f = "789" + 4567;
	document.getElementById('number1').innerHTML = a + "<br>" + b + "<br>" + c + "<br>" + d.firstname + "<br>" + e + "<br>" + f;
}
function dynamic(){
	let x = 999;// javascript is a dynamic
		x = 99.9;
		x = "javaScript is a Dynamic";
	let p1 = 555; // without decimal
	let p2 = 444.44; //with decimal
	document.getElementById('dynamic1').innerHTML = x + "<br>" + p1 + "<br>" + p2;
}
function myFunction(){
	let x = 88; // boolean expressions: true or false
	let y = 88;
	let z = 44;
	document.getElementById('boolean1').innerHTML = (x==y) + "<br>" + (y==z);
}
function array(){
	let bikeName = ["Honda", "Yamaha", "Tiger"]; // array type values
	document.getElementById('array1').innerHTML = bikeName[2];
}
function type1(){
	let x1 = 1234;// typeof function
	let x2 = 1234.5;
	let x3 = "Benz";
	let x4;
	document.getElementById('typeof1').innerHTML = typeof x1 + "<br>" + typeof x2 + "<br>" + typeof x3 + "<br>" + typeof x4;
}
function emptyValues1(){
	let z = "";// typeof String
	document.getElementById('empty1').innerHTML = typeof z;
}