var app_firebase = {};
(function () { 
    var firebaseConfig = {
        apiKey: "AIzaSyD4GzB4hOQNdYIMp-5EvS_om0WErp7a12g",
        authDomain: "movie-app-fe51f.firebaseapp.com",
        projectId: "movie-app-fe51f",
        storageBucket: "movie-app-fe51f.appspot.com",
        messagingSenderId: "422299469618",
        appId: "1:422299469618:web:5619c658de6cc1c311392b",
        measurementId: "G-0HLBM16M1P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_firebase = firebase;
  firebase.analytics();
})()