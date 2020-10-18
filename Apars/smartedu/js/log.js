
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("Login").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email1 = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email1;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("Login").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email1").value;
  var userPass = document.getElementById("exampleInputPassword1").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}


