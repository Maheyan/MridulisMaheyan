function alreadyLogin() {
    window.location="home.html";
}
(function () {
var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {

            return true;
          },
          uiShown: function() {
            document.getElementById('loader').style.display = 'none';
          }
        },
        signInFlow: 'popup',
        signInSuccessUrl: 'home.html',
        signInOptions: [

          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
      }; 
ui.start('#firebaseui-auth-container', uiConfig);
})()

      var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    uid = user.uid;
    window.location.replace("home.html");
  }
});
})()