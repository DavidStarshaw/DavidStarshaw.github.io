var MyApp = {
	profile: null
};

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
	MyApp.profile = undefined;
}

function onSignIn(googleUser) {
	MyApp.profile = googleUser.getBasicProfile();
	console.log('ID: ' + MyApp.profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + MyApp.profile.getName());
	console.log('Image URL: ' + MyApp.profile.getImageUrl());
	console.log('Email: ' + MyApp.profile.getEmail());
}