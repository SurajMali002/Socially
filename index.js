firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is signed in.

		document.getElementById('login-div').style.display = 'none';
		document.getElementById('registration-form-div').style.display = 'none';
		location.assign('./Logined/dashboard.html');

	} else {
		//writequery()
		// No user is signed in.
		checkSession();
		document.getElementById('login-div').style.display = 'block';
		document.getElementById('registration-form-div').style.display = 'none';
		//jquery signup animation
		$('.email').on("change keyup paste",
			function () {
				if ($(this).val()) {
					$('.icon-paper-plane').addClass("next");
				} else {
					$('.icon-paper-plane').removeClass("next");
				}
			}
		);

		$('.next-button').hover(
			function () {
				$(this).css('cursor', 'pointer');
			}
		);

		$('.next-button.email').click(
			function () {
				console.log("Something");
				$('.email-section').addClass("fold-up");
				$('.password-section').removeClass("folded");
			}
		);

		$('.password').on("change keyup paste",
			function () {
				if ($(this).val()) {
					$('.icon-lock').addClass("next");
				} else {
					$('.icon-lock').removeClass("next");
				}
			}
		);

		$('.next-button').hover(
			function () {
				$(this).css('cursor', 'pointer');
			}
		);

		$('.next-button.password').click(
			function () {
				console.log("Something");
				$('.password-section').addClass("fold-up");
				$('.repeat-password-section').removeClass("folded");
			}
		);

		$('.repeat-password').on("change keyup paste",
			function () {
				if ($(this).val()) {
					$('.icon-repeat-lock').addClass("next");
				} else {
					$('.icon-repeat-lock').removeClass("next");
				}
			}
		);

		$('.next-button.repeat-password').click(
			function () {
		var email = document.getElementById('email-in').value;
		var password = document.getElementById('password-in').value;
		var name = email.substring(0, email.lastIndexOf("@"))
			localStorage.setItem('username',name)
		$('.success').css("marginTop", 0);
		var domain = email.substring(email.lastIndexOf("@") + 1);

				$('.repeat-password-section').addClass("fold-up");
				firebase.auth().createUserWithEmailAndPassword(email, password)
  					.then((userCredential) => {
    					// Signed in
    				
  					})
  					.catch((error) => {
    					var errorCode = error.code;
    					var errorMessage = error.message;
    					      Swal.fire({
        						title: 'Error!',
        						text: errorMessage,
        						icon: 'error',
        						confirmButtonText: 'Cool'
      							}).then(()=>{
      								window.location.reload()
      							})
    					// ..
  					});
				
			}
		);

		$(function () {
			/*var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
			var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			    return new bootstrap.Tooltip(tooltipTriggerEl);
			});
			*/
			$('[data-toggle="tooltip"]').tooltip();
		})
	}
});


function GoToSignInForm() {
	//signin form div visiblity change
	document.getElementById('login-div').style.display = 'none';
	document.getElementById('registration-form-div').style.display = 'block';
}

function goToLoginScreen() {
	//go back to login screen
	document.getElementById('login-div').style.display = 'block';
	document.getElementById('registration-form-div').style.display = 'none';
}

function LogintoApp() {
	//signin with password and email function
  var email = document.getElementById('your_email').value;
  var password = document.getElementById('your_pass').value;
	firebase.auth().signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			// ...
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
      Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
		});

}

function writequery() {
	// writing query test function
	var messageRef = db.collection('sanatgsih').doc();
	messageRef.set({
			name: "Los Angeles",
			state: "CA",
			country: "USA"
		})
		.then(() => {
			console.log("Document successfully written!");
		})
		.catch((error) => {
			console.error("Error writing document: ", error);
		});
}




function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}



function checkSession(){
   var c = getCookie("visited");
   if (c === "yes") {
   	document.getElementById('signinid').style.display = 'block';
   	document.getElementById('introweb').style.display = 'none';
   } else {
    
    document.getElementById('signinid').style.display = 'none';
   	document.getElementById('introweb').style.display = 'block';
   }
}

function continuesession(){
	 setCookie("visited", "yes", 365)
	 var c = getCookie("visited");
	 if(c === "yes"){
    // logic
     window.location.reload()

	 }

}
