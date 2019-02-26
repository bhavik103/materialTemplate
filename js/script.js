// function mySignInFunction() {
//   alert("Helllo from signin button!");
// }

// function myRegisterFunction() {
//   alert("Helllo from register button!");
// }

new mdc.textField.MDCTextField.attachTo(document.querySelector('.username'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.password'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.fname'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.lname'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.email'));
new mdc.textField.MDCTextField.attachTo(document.querySelector('.p1'));


//For Login >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const dialog=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
$('#b1').on('click',function(evt){
	
	dialog.open();
});
$('#canclebtn').on('click',function(evt){
	
	dialog.close();
});

document.querySelector('.pure-form').addEventListener('submit', function (e) {

	var nameInput = document.getElementById('username').value;
	var passwordInput = document.getElementById('password').value;

	var data={
		usrname:nameInput,
		password:passwordInput
	}
	e.preventDefault();

	console.log(data);       
});

//For Register >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const dialog2 =new mdc.dialog.MDCDialog.attachTo(document.querySelector('.registerDialog'));
$('#b2').on('click',function(evt){
	
	dialog2.open();
});
$('#canclebtn').on('click',function(evt){
	
	dialog2.close();
});

document.querySelector('.register-form').addEventListener('submit', function (e) {

	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var pword = document.getElementById('pword').value;

	var data={
		firstname:fname,
		lastname:lname,
		email:email,
		password:pword
	}
	e.preventDefault();

	console.log(data);       
});


