window.onload = function() {
	var btnUpdateStatus = document.getElementById('btnUpdateStatus');
	var btnCancelPost = document.getElementById('btnCancelPost');
	var newStatus = document.getElementById('newStatus');
	var userStatus = document.getElementById('userStatus');
	var newPost = document.getElementById('newPost');

	btnUpdateStatus.onclick = function() {
		userStatus.innerHTML = newStatus.value;
		newStatus.value = "";
	}

	btnCancelPost.onclick = function() {
		newPost.value = "";
	}

}