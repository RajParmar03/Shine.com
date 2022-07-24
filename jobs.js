//This is the linking of the login page through the create profile tab in the jobs page.

let logInProfile = document.querySelector("#JS_logInCreateProfile");
logInProfile.addEventListener("click",logInProfileFunction);
function logInProfileFunction(){
    window.location.href = "login.html";
}

// This is for the functionality of the display logged in username.

// let user = JSON.parse(localStorage.getItem("logInData"));

// if(user != undefined){
//     document.querySelector("#user").innerText = "HELLO"+"🖐,"+" "+user.name;
// }else{
//     document.querySelector("#user").innerText = "PLEASE LOGIN FOR THE CUSTOMIZATION";
// }