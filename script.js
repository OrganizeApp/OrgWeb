var ultData = new Firebase("https://cheultimate.firebaseio.com/");
var ultUserData = new Firebase("https://cheultimate.firebaseio.com/users/");


//AUTH STUFF

function loginWithGoogle() {
	alert("work?");
	ultData.authWithOAuthPopup("google", function(error, authData) {
  		if (error) {
    		console.log("Login Failed!", error);
  		} else {
    		console.log("Authenticated successfully with payload:", authData);
    		alert("IT WORKS! Logged in as " + authData.google.displayName);
    		openWin();
    		
  		}
	})
	
};

function loginWithFacebook() {
	openWin();
};

function openWin(){
	window.open("dashboard.html", "_parent");
}

// after the page redirects
function loadFacebookAuthData() {
	ultData.authWithOAuthPopup("facebook", function(error, authData) {
  		if (error) {
    		console.log("Login Failed!", error);
  		} else {
    		console.log("Authenticated successfully with payload:", authData);
    		var greeting = document.getElementById('welcome');
			var profilePic = document.getElementById('profilePic');

			greeting.innerHTML = authData.facebook.displayName;
			profilePic.src = authData.facebook.profileImageURL;

			var userData = {
				"uid": authData.uid,
				"name": authData.facebook.displayName
			}

			ultUserData.push(userData);

		}
  	});


}
	


