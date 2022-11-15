// JavaScript Document
function validateForm() {
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var numbers = /^[0-9]+$/;
  if (document.regForm.name.value.length > 50) {
    alert("Name must not exceed 50 characters!");
	regForm.name.focus();
    return false;}
  if (document.regForm.ic.value.includes("-") ) {
    alert("IC cannot contain dash!");
	regForm.ic.focus();
    return false;}
  if (document.regForm.ic.value.length != 12 ) {
    alert("IC must have 12 numbers!");
	regForm.ic.focus();
    return false;}
  if (!document.regForm.ic.value.match(numbers) ) {
    alert("IC must consist of numbers only!");
	regForm.ic.focus();
    return false;}
  if (document.regForm.username.value.length < 5 ) {
    alert("Username must be more than or equal to 5 characters long!");
	regForm.username.focus();
    return false;}
  if (document.regForm.username.value.length > 12 ) {
    alert("Username must be less than or equal to 12 characters long!");
	regForm.username.focus();
    return false;}
  if (document.regForm.password.value.length < 5 ) {
    alert("Password must be more than or equal to 5 characters long!");
	regForm.password.focus();
    return false;}
  if (document.regForm.password.value.length > 12 ) {
    alert("Password must be less than or equal to 12 characters long!");
	regForm.password.focus();
    return false;}
  if (document.regForm.email.value!="") {
	  if(!document.regForm.email.value.match(mailformat)){
    		alert("Invalid email format!");
		    regForm.email.focus();
    		return false;}}
  if (document.regForm.class.value=="") {
    alert("Please select class!");
	regForm.class.focus();
    return false;}
  if (!document.regForm.age.value.match(numbers) ) {
    alert("Age must consist of numbers only!");
	regForm.age.focus();
    return false;}
  if (!document.regForm.phone.value.match(numbers) ) {
    alert("Telephone number must consist of numbers only!");
	regForm.phone.focus();
    return false;}
	
  	var choice1 = document.getElementById('choice1').checked;
 	var choice2 = document.getElementById('choice2').checked;
	var choice3 = document.getElementById('choice3').checked;
	var choice4 = document.getElementById('choice4').checked;
 	var choice5 = document.getElementById('choice5').checked;
	var choice6 = document.getElementById('choice6').checked;  
 
 	if(choice1==false && choice2==false && choice3==false && choice4==false && choice5==false && choice6==false){
 		alert('Please select an interest!');
 		return false;}
	
	var r = confirm("Confirm submission?");
	if (r == true) {
  		return true;
	} else {
  		return false;
	}
}