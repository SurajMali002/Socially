var allprobvalue = 0;
var username;
var userstate;
var usercity;
var userlocality;
var useraddress;
var userselectprob;
var userexplainprob;
var pr1;
var pr2;
var pr3;
var pr4;
var nowscoprval;
var nowillegalprval;
var nowbullprval;
var nowotherprval;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {



        var user = firebase.auth().currentUser.displayName;

        if (user === null) {
            var user = firebase.auth().currentUser;

            // Add a new document in collection "cities"
            db.collection(user.email+"allproblems").doc("value").set({
            value:0,
            })
            .then(() => {
            db.collection(user.email+"societyproblems").doc("value").set({
                value:0,
            })
            .then(() => {
                db.collection(user.email+"illegalconstructions").doc("value").set({
                    value:0,
                })
                .then(() => {
                    db.collection(user.email+"bullyingproblems").doc("value").set({
                        value:0,
                    })
                    .then(() => {
                        db.collection(user.email+"other").doc("value").set({
                            value:0,
                        })
                        .then(() => {
                            console.log("success making all collections")
                            Swal.fire({
                                title: 'Success!',
                                text: "Hi we have currently done some backend operations which require a reload kindly proceed",
                                icon: 'success',
                                confirmButtonText: 'Proceed'
                            }).then(()=>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error donot know:", error);
                        });
                    })
                    .catch((error) => {
                        console.error("Error donot know:", error);
                    });
                })
                .catch((error) => {
                    console.error("Error donot know:", error);
                });
            })
            .catch((error) => {
                console.error("Error donot know:", error);
            });
        })
        .catch((error) => {
            console.error("Error donot know:", error);
        });
            user.sendEmailVerification().then(function() {
                // Email sent.
                console.log("SENT")

            }).catch(function(error) {
                // An error happened.
                console.log(error)
            });
            if (localStorage.getItem('username') != null) {
                var user = firebase.auth().currentUser;
                user.updateProfile({
                    displayName: localStorage.getItem('username'),
                    photoURL: "https://avatars.abstractapi.com/v1/?api_key=cc63c9f9fa0040e395f547afb3a4818b&name=" + localStorage.getItem('username') + ""
                }).then(function() {
                    // Update successful.

                }).catch(function(error) {
                    // An error happened.
                    console.log(error)
                });
            } else {
                document.getElementById('username').innerHTML = "user";
                if(window.location.pathname != '/socially/Logined/dashboard.html'){
                    document.getElementById('userdashproname').innerHTML = "user";
                }
            }
        } else {
            document.getElementById('username').innerHTML = user;
                if(window.location.pathname != '/socially/Logined/dashboard.html'){
                    document.getElementById('userdashproname').innerHTML = user;
                }
                var user = firebase.auth().currentUser;
                var docRef = db.collection(user.email+"allproblems").doc("value");

                docRef.onSnapshot((doc) => {
                    if (doc.exists) {
                        allprobvalue = doc.data().value;
                         localStorage.setItem("allproblemsvalue",allprobvalue);
                         if(allprobvalue != 0){
                            if(window.location.pathname === '/socially/Logined/dashboard.html'){
                                document.getElementById('nostatsnow').style.display = 'none';
                            }
                          }
                    } else {
                        // doc.data() will be undefined in this case
                        localStorage.setItem("allproblemsvalue",'0')
                    }
                })
          
                var user = firebase.auth().currentUser;

                var docRef2 = db.collection(user.email+"societyproblems").doc("value");

                docRef2.onSnapshot((doc) => {
                    if (doc.exists) {
                        pr1 = doc.data().value;
                        localStorage.setItem("societyproblemsnum",doc.data().value);
                        if(window.location.pathname === '/socially/Logined/dashboard.html'){
                            document.getElementById('societyproblemsnumber').innerHTML =  doc.data().value
                        }
                       
                    } else {
                        // doc.data() will be undefined in this case
                        localStorage.setItem("societyproblemsnum",'0');
                      
                        if(window.location.pathname === '/socially/Logined/dashboard.html'){
                            document.getElementById('societyproblemsnumber').innerHTML = '0';
                            pr1 = '0';
                        }
                    }
                    var docRef3 = db.collection(user.email+"illegalconstructions").doc("value");

                    docRef3.onSnapshot((doc) => {
                        if (doc.exists) {
                            pr2 = doc.data().value;
                        localStorage.setItem("illegalconstructionsnum",doc.data().value);
                        
                        if(window.location.pathname === '/socially/Logined/dashboard.html'){
                            document.getElementById('illegalconstructionsnumber').innerHTML =  doc.data().value;
                            
                        }
                        } else {
                            // doc.data() will be undefined in this case
                            localStorage.setItem("illegalconstructionsnum",'0');
                            if(window.location.pathname === '/socially/Logined/dashboard.html'){
                                document.getElementById('illegalconstructionsnumber').innerHTML =  '0';
                                pr2 = '0';
                            }
                        }
                        var docRef4 = db.collection(user.email+"bullyingproblems").doc("value");

                        docRef4.onSnapshot((doc) => {
                            if (doc.exists) {
                                pr3 = doc.data().value;
                            localStorage.setItem("bullyingproblemsnum",doc.data().value);
                                
                                if(window.location.pathname === '/socially/Logined/dashboard.html'){
                                    document.getElementById('bullyingproblemsnumber').innerHTML =  doc.data().value;
                                }
                            } else {
                                // doc.data() will be undefined in this case
                                localStorage.setItem("bullyingproblemsnum",'0');
                                if(window.location.pathname === '/socially/Logined/dashboard.html'){
                                    document.getElementById('bullyingproblemsnumber').innerHTML =  '0';
                                    pr3 = '0';
                                }

                            }
                            var docRef5 = db.collection(user.email+"other").doc("value");

                            docRef5.onSnapshot((doc) => {
                                if (doc.exists) {
                                    pr4 = doc.data().value;
                                localStorage.setItem("otherproblem",doc.data().value);
                               
                                if(window.location.pathname === '/socially/Logined/dashboard.html'){
                                    document.getElementById('otherproblemsnumber').innerHTML =  doc.data().value;
                                    $(document).ready(function() {
                                        // Javascript method's body can be found in assets/assets-for-demo/js/demo.js
                                        demo.initChartsPages();
                                      });   
                                }
                           
                                } else {
                                    // doc.data() will be undefined in this case
                                    localStorage.setItem("otherproblem",'0');
                                    if(window.location.pathname === '/socially/Logined/dashboard.html'){
                                        document.getElementById('otherproblemsnumber').innerHTML =  '0';
                                        pr4 = '0';
                                    }
                                }
                            })
                        })
                    })
                })
        }
        if (firebase.auth().currentUser.photoURL != null) {
            if(window.location.pathname != '/socially/Logined/dashboard.html'){
            document.getElementById('imagedashproname').src = firebase.auth().currentUser.photoURL
            }
        } else {
            var usernameforprofileimage = localStorage.getItem('username')
            if (usernameforprofileimage === null) {
                document.getElementById('imagedashproname').src = "../assets/img/logo-small.png"
            } else if (usernameforprofileimage != null) {
                var user = firebase.auth().currentUser;

                user.updateProfile({
                    photoURL: "https://avatars.abstractapi.com/v1/?api_key=cc63c9f9fa0040e395f547afb3a4818b&name=" + localStorage.getItem('username') + ""
                }).then(function() {
                    // Update successful.
                }).catch(function(error) {
                    // An error happened.
                    console.log(error)
                });
            }

        }
        if(window.location.pathname != '/socially/Logined/dashboard.html'){
            var user = firebase.auth().currentUser;
            document.getElementById('userinputemail').value = user.email;
            document.getElementById('userinputname').value = user.displayName;
        }

        $(function() {
            /*var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl);
            });
            */
            $('[data-toggle="tooltip"]').tooltip();
        })
        // document.getElementById('useravator').src = data;



    } else {
        // No user is signed in.
        window.location.assign("../index.html")
        
    }
});

function SignoutOfapp() {

    // User re-authenticated.
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        localStorage.clear();
    }).catch((error) => {
        // An error happened.
        Swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    })

}


function DeleteAccount() {



    (async () => {

        const {
            value: password
        } = await Swal.fire({
            title: 'Enter your password',
            input: 'password',
            inputLabel: 'Password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        })

        if (password) {
            var user = firebase.auth().currentUser;
            var credential = firebase.auth.EmailAuthProvider.credential(user.email, password);

            // Prompt the user to re-provide their sign-in credentials

            user.reauthenticateWithCredential(credential).then(function() {
                // User re-authenticated.
                
                user.delete().then(function() {
                    localStorage.clear()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Account deleted successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        window.location.reload()
                    })
                    // User deleted.
                }).catch(function(error) {
                    // An error happened.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    Swal.fire({
                        title: 'Error!',
                        text: errorMessage,
                        icon: 'warning',
                        confirmButtonText: 'Cool'

                    })
                });
            }).catch(function(error) {
                // An error happened.
                var errorCode = error.code;
                var errorMessage = error.message;
                Swal.fire({
                    title: 'Error!',
                    text: errorMessage,
                    icon: 'warning',
                    confirmButtonText: 'Cool'

                })
            });
        }

    })()
}

/*function setCookie(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate() + exdays);var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());document.cookie=c_name + "=" + c_value;}

function getCookie(c_name){var c_value = document.cookie;var c_start = c_value.indexOf(" " + c_name + "=");if (c_start == -1){c_start = c_value.indexOf(c_name + "=");}if (c_start == -1){c_value = null;}else{c_start = c_value.indexOf("=", c_start) + 1;var c_end = c_value.indexOf(";", c_start);if (c_end == -1){c_end = c_value.length;}c_value = unescape(c_value.substring(c_start,c_end));}return c_value;}

checkSession();

function checkSession(){
   var c = getCookie("visited");
   if (c === "yes") {
     alert("Welcome back!");
   } else {
     setCookie("visited", "yes", 365);
     alert("Welcome new visitor!");
   }
}
*/
function getLocationFromip(){
    $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=9056111ac0584f22b2901bc3821969f0", function(data) {
    
    if(localStorage.getItem("userstate") === null){
    document.getElementById("stateforuser").value = data.region;
    }
    else{
        document.getElementById("stateforuser").value = localStorage.getItem("userstate")
    }
    if(localStorage.getItem("usercity") === null){
        document.getElementById("cityforuser").value = data.city;
    }
    else{
        document.getElementById("cityforuser").value = localStorage.getItem('usercity');
    }
    if(localStorage.getItem("useraddress") != null){
        document.getElementById("addressforuser").value = localStorage.getItem("useraddress");
    }
    


    document.getElementById("nameforuser").value = firebase.auth().currentUser.displayName;
})

}

function ReportProblemp1(){
    username =  document.getElementById("nameforuser").value;
    if(username === null ){
        username = "not provided by user"
    }
    userstate = document.getElementById("stateforuser").value;
    if(userstate === null){
        userstate = "not provided by user"
    }
    usercity = document.getElementById("cityforuser").value;
    if(usercity === null){
        usercity = "not provided by user"
    }

    userlocality = document.getElementById("localityforuser").value;
    if(userlocality === null){
        userlocality = "not provided by user"
    }
    useraddress = document.getElementById("addressforuser").value;
    if(useraddress === null){
        useraddress = "not provided by user"
    }
    userselectprob = document.getElementById("selectprob").value;
    userexplainprob = document.getElementById("floatingTextarea2").value;
    //console.log(userselectprob);
    if(userselectprob ==="Society Problems"){
        var user = firebase.auth().currentUser;
        var counter = allprobvalue;
        var nowallprobval = ++counter;

db.collection(user.email+"allproblems").doc("value").set({
    value:nowallprobval,
    })
    .then(() => {
        console.log("Document successfully written!");
    var counter = pr1;
    //add the click listener using addEventListener, this is preferred over inline handlers
       nowscoprval = ++counter;
        db.collection(user.email+"societyproblems").doc("value").set({
            value: nowscoprval,
            })
            .then(() => {
                console.log("Document successfully written!");
                ReportProblem()
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to Report Problem',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        Swal.fire({
            title: 'Error!',
            text: 'Failed to Report Problem',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    });
    }
    
    if(userselectprob === "Illegal constructions"){
        var user = firebase.auth().currentUser;

        var counter = allprobvalue;
        var nowallprobval = ++counter;
db.collection(user.email+"allproblems").doc("value").set({
    value:nowallprobval,
    })
    .then(() => {
        console.log("Document successfully written!");
    
        var counter = pr2;
        //add the click listener using addEventListener, this is preferred over inline handlers
        nowillegalprval = ++counter;
        db.collection(user.email+"illegalconstructions").doc("value").set({
            value:nowillegalprval,
            })
            .then(() => {
                console.log("Document successfully written!");
                ReportProblem()
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to Report Problem',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        Swal.fire({
            title: 'Error!',
            text: 'Failed to Report Problem',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    });
    }

    if(userselectprob === "Bullying"){
        var user = firebase.auth().currentUser;

        var counter = allprobvalue;
        var nowallprobval = ++counter;
db.collection(user.email+"allproblems").doc("value").set({
    value:nowallprobval,
    })
    .then(() => {
        console.log("Document successfully written!");
    
        var counter = pr3;
        //add the click listener using addEventListener, this is preferred over inline handlers
        nowbullprval = ++counter;
        db.collection(user.email+"bullyingproblems").doc("value").set({
            value:nowbullprval,
            })
            .then(() => {
                console.log("Document successfully written!");
                ReportProblem()
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to Report Problem',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        Swal.fire({
            title: 'Error!',
            text: 'Failed to Report Problem',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    });
    }


    if(userselectprob === "Other.."){

        var user = firebase.auth().currentUser;

        var counter = allprobvalue;
        var nowallprobval = ++counter;
db.collection(user.email+"allproblems").doc("value").set({
    value:nowallprobval,
    })
    .then(() => {
        console.log("Document successfully written!");
    
        var counter = pr4;
        //add the click listener using addEventListener, this is preferred over inline handlers
        nowotherprval = ++counter;
        db.collection(user.email+"other").doc("value").set({
            value:nowotherprval,
            })
            .then(() => {
                console.log("Document successfully written!");
                ReportProblem()
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to Report Problem',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        Swal.fire({
            title: 'Error!',
            text: 'Failed to Report Problem',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
    });


    }

}
function ReportProblem(){
    db.collection("userProblems").add({
        name:username,
        email:firebase.auth().currentUser.email,
        state:userstate,
        city:usercity,
        locality:userlocality,
        Address:useraddress,
        typeofproblem:userselectprob,
        problemexplained:userexplainprob,
        Phone:firebase.auth().currentUser.phoneNumber,
    })
    .then(() => {
        Swal.fire({
            title: 'Success!',
            text: 'Problem Reported',
            icon: 'success',
            confirmButtonText: 'Cool'
        }).then(() => {
            window.location.reload()
        })
    })
    .catch((error) => {
        Swal.fire({
            title: 'Error!',
            text: 'Failed to Report Problem',
            icon: 'error',
            confirmButtonText: 'Cool'
        }).then(() => {
            window.location.reload()
        })
    });
}


function updateUserProfileInfo() {
    var user = firebase.auth().currentUser;
    

    user.updateEmail(document.getElementById('userinputemail').value).then(function() {
        localStorage.setItem("useraddress",document.getElementById('userinputaddress').value) 
        localStorage.setItem("usercity",document.getElementById('userinputcity').value)   
      // Update successful.
      user.updateProfile({
        displayName: document.getElementById('userinputname').value,
        phoneNumber: document.getElementById('userinputphone').value,
      }).then(function() {
        // Update successful.
        Swal.fire({
            title: 'Success!',
            text: 'Profile updated',
            icon: 'success',
            confirmButtonText: 'Cool'
        }).then(()=>{
            location.reload();
        })
      }).catch(function(error) {
        // An error happened.
      });
    }).catch(function(error) {
      // An error happened.
    });

}
