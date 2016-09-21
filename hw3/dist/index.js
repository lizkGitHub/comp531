window.onload = function() {
	var btnSignIn = document.getElementById('signIn');
	var btnRegister = document.getElementById('register')
	var username = document.getElementById('form-username');
	var password = document.getElementById('form-password');
	var accountName = document.getElementById('form-account-name');
	var displayName = document.getElementById('form-account-name');
	var email = document.getElementById('form-email');
	var phone = document.getElementById('form-phone-number');
	var birthDate = document.getElementById('form-birth-date');
	var passwordR = document.getElementById('form-passwordR');
	var passwordConfirm = document.getElementById('form-password-confirmation');

	btnSignIn.onclick = function() {
		if (valiSignIn()) {
			location.href = 'main.html'; 
		}
	}

	btnRegister.onclick = function() {
		if (valiRegister()) {
			location.href = 'main.html'; 
		}
	}

	function valiSignIn() {
		if ((username.value != "") && (password.value != "")) {
			return true;
		}
	}




}