document.getElementById("hello").onclick = function() {
	console.log("Hello");
};

document.getElementById("sign-in details").onclick = function() {
	console.log('ID: ' + MyApp.profile.getId());
	console.log('Name: ' + MyApp.profile.getName());
	console.log('Image URL: ' + MyApp.profile.getImageUrl());
	console.log('Email: ' + MyApp.profile.getEmail());
};