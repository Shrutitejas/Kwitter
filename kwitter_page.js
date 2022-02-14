//YOUR FIREBASE LINKS
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
roomname=localStorage.getItem("Roomname");

function send(){
   msg=document.getElementById("msg").value;
   firebase.database().ref(roomname).push({
      name : username,
      message : msg,
      like : 0
   });
   document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      console.log(firebase_message_id);
      console.log(message_data);

      name=message_data["name"];
      message=message_data["message"];
      like=message_data["like"];

      name_tag="<h4>"+name+"</h4>";
      msg_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_btn="<button class='btn btn-warning' id="+firebase_message_id+" onclick='updatelike(this.id)' value="+like+">";
      spantag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
      row=name_tag + msg_tag + like_btn + spantag;
      document.getElementById("output").innerHTML += row;
   } });  }); }
getData();

function updatelike(message_id){
   buttonid=message_id;
   likes=document.getElementById(buttonid).value;
   updatelikes=Number(likes)+1;
   firebase.database().ref(roomname).child(message_id).update({
      like : updatelikes
   });
}

function logout(){
      localStorage.removeItem("person");
      localStorage.removeItem("Roomname");
      window.location.replace("index.html");
}
