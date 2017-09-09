import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCZmU_EDUWoWGcGNEh1gjLobmcU0xLjhhU",
    authDomain: "favorme-78080.firebaseapp.com",
    databaseURL: "https://favorme-78080.firebaseio.com",
    projectId: "favorme-78080",
    storageBucket: "favorme-78080.appspot.com",
    messagingSenderId: "184552140561"
  };
var fire = firebase.initializeApp(config);
export default fire;

