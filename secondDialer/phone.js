$(document).ready(function() { // do this when the doc is loaded
	$("#tab_bar").show(); //show the element with the ID "element"
	$("#content_contacts").hide(); //hide the element with the ID "otherElement"
	$("#content_addcontact").hide();
	$("#content_help").hide();
	$("#content_dial").show();
});

$("#tab_dial").click(function() { //when "tab_dial" is clicked
	$("#content").show();
	$("#content_dial").show();
	$("#content_contacts").hide();
	$("#content_help").hide();
	$("#content_addcontact").hide();
});

$("#tab_contacts").click(function() { //when "tab_dial" is clicked
	$("#content").show();
	$("#content_dial").hide();
	$("#content_contacts").show();
	$("#content_help").hide();
	$("#content_addcontact").hide();
});

$("#tab_addcontact").click(function() { //when "tab_dial" is clicked
	$("#content").show();
	$("#content_dial").hide();
	$("#content_contacts").hide();
	$("#content_help").hide();
	$("#content_addcontact").show();
});

$("#tab_help").click(function() {
	$("#content").show();
	$("#content_dial").hide();
	$("#content_contacts").hide();
	$("#content_help").show();
	$("#content_addcontact").hide();
})

/* fancy dialing functions */
$(".dialer_button").click(function() {
	$("#dialer_input").val($("#dialer_input").val() + this.innerText);
})

$("#clear").click(function() {
	$("#dialer_input").val("");
})