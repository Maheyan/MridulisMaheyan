var app_firebase = {};
(function () { 
    var firebaseConfig = {
    apiKey: "AIzaSyDXbBWXz0I3bSBwY0anr9AdzjUYWrsE_8M",
    authDomain: "story-mode-learning.firebaseapp.com",
    databaseURL: "https://story-mode-learning.firebaseio.com",
    projectId: "story-mode-learning",
    storageBucket: "story-mode-learning.appspot.com",
    messagingSenderId: "259152173161",
    appId: "1:259152173161:web:65b3c9b2a212f589b92af8",
    measurementId: "G-GMT12B0L63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  app_firebase = firebase;
})()