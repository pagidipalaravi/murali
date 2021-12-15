function assignment1(){
	let a = 99986532;
	a += 100;
	document.getElementById('additionAssignment').innerHTML =a; 
	let b = 102650;
	b -= 100;
	document.getElementById('subAssignment').innerHTML = b;
	let c = 18900;
	c *= 40;
	document.getElementById('multiplication').innerHTML = c;
	let d = 5450;
	 d /= 5;
	 document.getElementById('division').innerHTML = d;
	 let e = 2450;
	 e %= 9;
	 document.getElementById('modulas').innerHTML = e;
	 let y = 1 +10 + "murali";
	 let z = 456 + "789" + "krishna";
	 let p = "krishna" + 650 + 123;
	 document.getElementById('string').innerHTML = y + "<br>" + z + "<br>" + typeof p;
	 let l = 10;
	 l **= 5;
	 document.getElementById('doubleAsritch').innerHTML = l;
}