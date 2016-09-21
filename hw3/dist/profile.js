window.onload = function() {
	var btnUpdate = document.getElementById('btnUpdate');
	var displayName = document.getElementById('displayName');
	var email = document.getElementById('email');
	var phoneNumber = document.getElementById('phoneNumber');
	var zipcode = document.getElementById('zipcode');
	var newName = document.getElementById('form-display-name');
	var newEmail = document.getElementById('form-email');
	var newPhone = document.getElementById('form-phone-number');
	var newZipcode = document.getElementById('form-zipcode');
	var newPassword = document.getElementById('form-password');
	var passwordConfirm = document.getElementById('form-password-confirmation');





	btnUpdate.onclick = function() {
		if(validate()) {
			setInfo();
		}
	}

	function setInfo() {
		if (newName.value!="") {
			displayName.innerHTML = newName.value;
		}
		if (newEmail.value!="") {
			email.innerHTML = newEmail.value;
		}
		if (newPhone.value!="") {
			phoneNumber.innerHTML = newPhone.value;
		}
		if (newZipcode.value!="") {
			zipcode.innerHTML = newZipcode.value;
		}
		newName.value = "";
		newEmail.value = "";
		newPhone.value = "";
		newZipcode.value = "";
		newPassword.value = "";	
		passwordConfirm.value = "";

	}

	// validate the input information
	function validate() {
	    // pattern for phone number
	    var rePhone = /^\d{3}-\d{3}-\d{4}$/;
	    // pattern for email
	    var reEmail = /^\S+@\S+\.\S+$/;
	    // pattern for zipcode
	    var reZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	    // pattern for password
	    var rePassword = /^.{6,}$/;
	    // save all missed items
	    var missedStr = "";

	    if (newEmail.value!="" && newEmail.value!=null && !reEmail.test(newEmail.value)) {
	    	missedStr = missedStr + "The email is not valid.\n"
	    }
	    if (newZipcode.value!="" && newZipcode.value!=null &&!reZip.test(newZipcode.value)) {
	    	missedStr = "Zipcode  is not valid and the format should be xxxxx or xxxxx-xxxx.\n" + missedStr;
	    }
	    
		if (newPhone.value!="" && newPhone.value!=null &&!rePhone.test(newPhone.value)) {
	    	missedStr = "The phone number format should be xxx-xxx-xxxx.\n" + missedStr;
	    }

	    if (newPassword.value!="" && newPassword!=null && !rePassword.test(newPassword.value)) {
	    	missedStr = "password should have at least 6 characters.\n" + missedStr;

	    }
	    if (passwordConfirm.value!="" && newPassword.value != passwordConfirm.value) {
	    	missedStr = missedStr + "The password is not the same as password confirmation.\n";	
	    }
	    if (missedStr != "") {
	    	alert(missedStr);
	    	return false;
	    }
	    return true;
	}





}