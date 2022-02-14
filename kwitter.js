function adduser(){
    username=document.getElementById("username").value;
    localStorage.setItem("person",username);
    window.location="kwitter_room.html";
}