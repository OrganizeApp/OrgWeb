var ultData = new Firebase("https://cheultimate.firebaseio.com/");



function login() {
	alert("work?");
	ultData.authWithOAuthPopup("google", function(error, authData) {
  		if (error) {
    		console.log("Login Failed!", error);
  		} else {
    		console.log("Authenticated successfully as " + google.displayName "  with payload:", authData);
    		
  		}
	})
	
};

	
