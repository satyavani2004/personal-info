function openProfile(){
            window.location.href="pinfo.html";
        }

function contactMessage(){
    alert("Thank you for visiting my portfolio! Feel free to contact me.");
}
function showDateTime(){
    const today=new Date();
    document.getElementById("dateTime").innerHTML =
        "Today's Date: " + today.toLocaleString();
}

showDateTime();
let hour=new Date().getHours();

if(hour < 12){
    document.getElementById("greeting").innerHTML = "🌞 Good Morning!";
}
else if(hour < 18){
    document.getElementById("greeting").innerHTML = "☀ Good Afternoon!";
}
else{
    document.getElementById("greeting").innerHTML = "🌙 Good Evening!";
}
function downloadResume() {
    window.open("resume.pdf", "_blank");
}