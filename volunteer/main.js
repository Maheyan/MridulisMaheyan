
var config = {
  apiKey: "AIzaSyAh6cUTSjFFd-eFq5htAto3-USIhZIYmWQ",
  authDomain: "chat-app-mridul-bhai.firebaseapp.com",
  databaseURL: "https://chat-app-mridul-bhai.firebaseio.com",
  projectId: "chat-app-mridul-bhai",
  storageBucket: "chat-app-mridul-bhai.appspot.com",
  messagingSenderId: "716664329898"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('volunteerForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var college = getInputVal('college');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var anwser = getInputVal('anwser');
  var fbid = getInputVal('fbid');
  var batchSelect = getInputVal("batchSelect");
  var city = getInputVal("city");
  var wnumber = getInputVal("wnumber");

  // Save message
  saveMessage(name, email, college, fbid, phone, batchSelect, city, wnumber, anwser);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('volunteerForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, college, fbid, phone, batchSelect, city, wnumber, anwser){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    college: college,
    fbid: fbid,
    phone: phone,
    hsc: batchSelect,
    city: city,
    work: wnumber,
    anwser:anwser
  });
}