function increment(){
	let x = 500;
	x++;
	let y = x;
	document.getElementById('increment1').innerHTML = y;
	let a = 455;
	a--;
	let b = a;
	document.getElementById('decrement').innerHTML = a;
	let c = 999;
	d = c ** 5;
	document.getElementById('exponentiation').innerHTML = d;
	let l = 455;
	let m = Math.pow(l,3);
	document.getElementById('power').innerHTML = m;
	let p = 987 + 100 + 10*5;
	document.getElementById('precedence').innerHTML = p;
	let q = (100 +100)-10 + 50 - 40 + 10 * 3;
	document.getElementById('precedence1').innerHTML = q;
	
}