function reAssign(){
		//reassigned with const
		const mobile= "oneplus"; 
			//mobile = "apple";	reAssign is not defined
			model = "MI note 7";
	document.getElementById('reassign1').innerHTML = mobile;
	document.getElementById('model1').innerHTML = model;	
}
function blockScope(){
	const tv = "LG";
	{
		const tv = "THOSHIBA";
		document.getElementById('scope1').innerHTML = tv;
	}
	{
		const tv = "samsung";
		document.getElementById('scope2').innerHTML = tv;
	}
	document.getElementById('scope').innerHTML = tv;
}
function myFunction(){
	const p = 100;
	//let p = 99; Identifier 'p' has already been declared
	document.getElementById('model2').innerHTML = p;
}