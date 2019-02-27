$(document).ready(function() {
	hide("results_par_div");
});

function show(id) { document.getElementById(id).className = "visible_div";}

function hide(id) { document.getElementById(id).className = "invisible_div"}

function Set_Lengths() {
	let lengths =  ("<option value=\"inches\">Inches</option>\n" +
					"<option value=\"feet\">Feet</option>\n" +
					"<option value=\"miles\">Miles</option>");
	var dropdowns = document.getElementsByClassName("dropdown");
	dropdowns[0].innerHTML = lengths;
	dropdowns[1].innerHTML = lengths;
}

function Set_Bits() {
	let bits = ("<option value=\"bits\">Bits</option>\n" +
				"<option value=\"gigabytes\">Gigabytes</option>" );
	var dropdowns = document.getElementsByClassName("dropdown");
	dropdowns[0].innerHTML = bits;
	dropdowns[1].innerHTML = bits;
}

function Set_Liquid() {
	let liquids =  ("<option value=\"ounces\">Ounces</option>\n" +
					"<option value=\"cups\">Cups</option>\n" +
					"<option value=\"gallons\">Gallons</option>");
	var dropdowns = document.getElementsByClassName("dropdown");
	dropdowns[0].innerHTML = liquids;
	dropdowns[1].innerHTML = liquids;
}

Set_Lengths();

function Button_Pressed() {
	var knowledge = Get_Learnt();
	var quantity = knowledge[0];
	var from_type = knowledge[1];
	var to_type = knowledge[2];
	var result = Convert(quantity, from_type, to_type);
	show("results_par_div");
	console.log(document.getElementById("results_par_div").className);
	document.getElementById("results_par").innerHTML = (`${quantity} ${from_type} is equivalent to ` +
		`${result} ${to_type}. At least, I hope it is but don't risk a spaceship on this...`);
}

function Get_Learnt() {
	var quantity = document.getElementById("from_quantity").value;
	if (quantity == "") { quantity = 0.0; }
	var from_type = document.getElementById("dropdown_from_type").value;
	var to_type = document.getElementById("dropdown_to_type").value;
	return [quantity, from_type, to_type];
}

function Convert(quantity, from, to) {
	if (from == "") {console.alert("You must select unit types by first choosing a " +
		"conversion type from the menu then accessing the dropdown menus.")}
	//LENGTH CONVERSIONS
	if (from == "inches") {
		if (to == "inches") { return quantity; }
		if (to == "feet") { return quantity/12; }
		if (to == "miles") { return quantity/12/5280; }
		else {	console.alert("You broke it!"); 
				return -1; }
	}
	if (from == "feet") {
		if (to == "inches") { return 12*quantity; }
		if (to == "feet") { return quantity; }
		if (to == "miles") { return quantity/5280; }
		else {	console.alert("You broke it!"); 
				return -1; }
	}
	if (from == "miles") {
		if (to == "inches") { return 5280*12*quantity; }
		if (to == "feet") { return 5280*quantity; }
		if (to == "miles") { return quantity; }
		else {	console.alert("You broke it!"); 
				return -1; }
	}
	//END LENGTH CONVERSIONS

	//LIQUID CONVERSIONS
	if (from == "ounces") {
		if (to == "ounces") {return quantity;}
		if (to == "cups") { return quantity/8; }
		if (to == "gallons") { return quantity/128; }
		else {	console.alert("You broke it!"); 
				return -1; }
	}
	if (from == "cups") {
		if (to == "ounces") {return 8*quantity;}
		if (to == "cups") {return quantity;}
		if (to == "gallons") {return quanity/16;}
		else {	console.alert("You broke it!"); 
				return -1; }
	}
	if (from == "gallons") {
		if (to == "ounces") {return 128*quantity;}
		if (to == "cups") {return 16*quantity;}
		if (to == "gallons") {return quantity;}
		else {	console.alert("You broke it!"); 
				return -1; }
	}
	//END LIQUID CONVERSIONS

	if (from == "bits") {
		if (to == "bits") { return quantity; }
		if (to == "gigabytes") { return quantity/8e9; }
		else {	console.alert("You broke it!"); 
				return -1; }
	}
	if (from == "gigabytes") {
		if (to == "bits") { return quantity*8e9; }
		if (to == "gigabytes") { return quantity; }
		else {	console.alert("You broke it!"); 
				return -1; }
	}

	else {	console.alert("You broke it!"); 
			return -1; }
}