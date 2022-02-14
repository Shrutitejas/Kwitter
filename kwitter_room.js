

const firebaseConfig = {
      apiKey: "AIzaSyDXaY2APOeVgTD6-TmaZhe3xv-gwsDZcCA",
      authDomain: "kwitter-47f72.firebaseapp.com",
      databaseURL: "https://kwitter-47f72-default-rtdb.firebaseio.com",
      projectId: "kwitter-47f72",
      storageBucket: "kwitter-47f72.appspot.com",
      messagingSenderId: "123034929816",
      appId: "1:123034929816:web:3b6effa75bcd5476699eed"
    };
    
    
   firebase.initializeApp(firebaseConfig);

   username=localStorage.getItem("person");
   document.getElementById("username").innerHTML="Welcome "+username +"!";

   function addroom(){
      roomname=document.getElementById("addroom").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Add room name"
      });
      localStorage.setItem("Roomname",roomname);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();

function logout(){
      localStorage.removeItem("person");
      localStorage.removeItem("Roomname");
      window.location="index.html";
}
function redirectToRoomName(name){
     console.log(name);
     localStorage.setItem("Roomname" , name);
     window.location="kwitter_page.html";
}