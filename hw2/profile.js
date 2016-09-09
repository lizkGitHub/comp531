window.onload = function() {
	// get element
	var btn = document.getElementById('submit');
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var phone = document.getElementById('phone');
	var zipcode = document.getElementById('zipcode');
	var password = document.getElementById('password');
	var pwconfirm = document.getElementById('pwconfirm');
	var newName = document.getElementById('newname');
	var newEmail = document.getElementById('newemail');
	var newPhone = document.getElementById('newphone');
	var newZipcode = document.getElementById('newzipcode');
	var newPassword = document.getElementById('newpassword');
	var newPwconfirm = document.getElementById('newpwconfirm');

	/* after click the button, it will first validate the input information
	 if the information meet the requirement then update it
	*/
	btn.onclick = function() {
		if(validate()) {
			update()
		}
	}

	// determine which information needs to update and alert the user and then update the profile
	function update() {
		var updateField = "";
		if ((newName.value != "") && (newName.value != name.innerHTML)) {
			updateField += "name will be updated from " + name.innerHTML + " to " + newName.value +"\n";
		}
		if ((newEmail.value != "") && (newEmail.value != email.innerHTML)) {
			updateField += "email will be updated from " + email.innerHTML + " to " + newEmail.value +"\n";
		}
		if ((newPhone.value != "") && (phone.innerHTML != newPhone.value)) {
			updateField += "phone will be updated from " + phone.innerHTML + " to " + newPhone.value +"\n";
		}
		if ((newZipcode.value != "") && (zipcode.innerHTML != newZipcode.value)) {
			updateField += "zipcode will be updated from " + zipcode.innerHTML + " to " + newZipcode.value +"\n";
		}
		if ((newPassword.value != "") && (password.innerHTML != newPassword.value)) {
			updateField += "password will be updated from " + password.innerHTML + " to " + newPassword.value +"\n";
		}
		if (updateField != "") {
			alert(updateField);
		} else {
			alert("nothing will be updated.");
		}
		updateProfile();
	}

	// update the profile and clear the input text
	function updateProfile() {
		if (newName.value!="") {
			name.innerHTML = newName.value;
		}
		if (newEmail.value!="") {
			email.innerHTML = newEmail.value;
		}
		if (newPhone.value!="") {
			phone.innerHTML = newPhone.value;
		}
		if (newZipcode.value!="") {
			zipcode.innerHTML = newZipcode.value;
		}
		if (newPassword.value!="") {
			password.innerHTML = newPassword.value;
		}
		if (newPwconfirm.value!="") {
			pwconfirm.innerHTML = newPwconfirm.value;
		}

		newName.value = "";
		newEmail.value = "";
		newPhone.value = "";
		newZipcode.value = "";
		newPassword.value = "";
		newPwconfirm.value = "";
	}

	// validate the input information
	function validate() {
	    //pattern for name
	    var reName = /^[a-zA-Z][a-zA-Z0-9]*$/
	    // pattern for phone number
	    var rePhone = /^\d{3}-\d{3}-\d{4}$/;
	    // pattern for email
	    var reEmail = /^\S+@\S+\.\S+$/;
	    // pattern for zipcode
	    var reZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	    // save all missed items
	    var missedStr = "";
	    if (newName.value!="" && newName.value!=null && !reName.test(newName.value)) {
	    	missedStr = "Account name is not valid. Account name can only be upper or lower case letters and numbers, but may not start with a number.\n" + missedStr;
	    }
	    if (newEmail.value!="" && newEmail.value!=null && !reEmail.test(newEmail.value)) {
	    	missedStr = missedStr + "The email is not valid.\n"
	    }
	    if (newZipcode.value!="" && newZipcode.value!=null &&!reZip.test(newZipcode.value)) {
	    	missedStr = "Zipcode  is not valid and the format should be xxxxx or xxxxx-xxxx.\n" + missedStr;
	    }
	    
		if (newPhone.value!="" && newPhone.value!=null &&!rePhone.test(newPhone.value)) {
	    	missedStr = "The phone number format should be xxx-xxx-xxxx.\n" + missedStr;
	    }

	    if (newPassword.value != newPwconfirm.value) {
	    	missedStr = missedStr + "The password is not the same as password confirmation.\n";	
	    }
	    if (missedStr != "") {
	    	alert(missedStr);
	    	return false;
	    }
	    return true;
	}
}