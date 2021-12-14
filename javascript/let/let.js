function myFunction1(){
	//let x = 100; Identifier 'x' has already been declared
	let x = 101;
	document.getElementById('myFunction').innerHTML=x;
}
function scope1(){
	//blockscope
	{
		let x = 80;
	document.getElementById('scope').innerHTML= x;
	}
	//document.getElementById('scope').innerHTML= x; x is not defined
	{
		// blockscope
		
		var x = 100; // "var" variable using outside of blockscope
	}
	document.getElementById('var').innerHTML= x;
}
function reDeclaration1(){
	let x = 80; // 'x' value execute
	{
		let x = 90; //blockscope
	}
	document.getElementById('reDeclaration').innerHTML= x;
}
function declaring1(){
	var x = 789;
	var x = 987;
	document.getElementById('declaring').innerHTML=x;
}
function element1(){
		
	let l = 99;
	{
		let l= 10;
	}
	{
		let l=20;
	}	
	document.getElementById('element').innerHTML=l;
}