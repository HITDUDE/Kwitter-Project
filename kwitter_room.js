var firebaseConfig = {
      apiKey: "AIzaSyAvXAVwYCM49PwBWWC4Jnu_G4udRIF1LAQ",
      authDomain: "kwitter-c1d1a.firebaseapp.com",
      databaseURL: "https://kwitter-c1d1a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c1d1a",
      storageBucket: "kwitter-c1d1a.appspot.com",
      messagingSenderId: "904440191990",
      appId: "1:904440191990:web:1cf1319a529906685dc5d7"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
