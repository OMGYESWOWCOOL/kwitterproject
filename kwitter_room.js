var firebaseConfig = {
      apiKey: "AIzaSyAPpnbW9xXmcHE2J9BJozrxhXOYcqO3xQQ",
      authDomain: "kwitter-project-87e48.firebaseapp.com",
      databaseURL: "https://kwitter-project-87e48-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-87e48",
      storageBucket: "kwitter-project-87e48.appspot.com",
      messagingSenderId: "617966256157",
      appId: "1:617966256157:web:b7a8e76c677a9fbcae86f4"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
