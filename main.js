
//For ferebase connection
var firebaseConfig = {
      apiKey: "AIzaSyDwvna1RGn4DXbIQPwycZ89DPrk30axD_E",
      authDomain: "websample-5238f.firebaseapp.com",
      databaseURL: "https://websample-5238f.firebaseio.com",
      projectId: "websample-5238f",
      storageBucket: "websample-5238f.appspot.com",
      messagingSenderId: "437735782090",
      appId: "1:437735782090:web:d1d547c0795673f18a2633"
    };

    firebase.initializeApp(firebaseConfig);
    
// main Script start from here

    var user =prompt("Enter your name here");
    function senMessage() {
     // var user = document.getElementById("user").value;
      var message = document.getElementById("message").value;

      var database = firebase.database();

      firebase.database().ref('users/').push().set({
        username: user,
        message: message,

      }, function(error) {
        if (error) {}
        else {}

      });
    }
    
    firebase.database().ref('users/').on('child_added', function() {

      $("#list").empty();

    });

    firebase.database().ref('users/').on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {


        var child = childSnapshot.val();
        var name = child.username;
        var message = child.message;
        //var thisuser = document.getElementById("user").value;
        
                
        if(name == user){
            $("#list").append(

              "<div class='right'>" + name + " : " + message + "</div>"
        );
        } else{
            $("#list").append(

              "<div class='left'>" + name + " : " + message + "</div>"
       );
        }
        console.log(name + " : " + message);
        // ...
      });
      
    });
    // next lelel start from here
    
    