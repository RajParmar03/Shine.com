// This is the part in which i am giving the links to the navbar Menus.

// (1) home page.
let home = document.querySelector("#JS_home");
home.addEventListener("click",homePageLinkFunciton);
function homePageLinkFunciton(){
    window.location.href = "index.html";
}

// (2) jobs page.
let jobs = document.querySelector("#JS_jobs");
jobs.addEventListener("click",jobsPageLinkFunction);
function jobsPageLinkFunction(){
    window.location.href = "jobs.html";
}

// (3) jobs seeking assisstance page.
let jobsAssisstance = document.querySelector("#JS_jobsAssistance");
jobsAssisstance.addEventListener("click",jobsAssisstancePageLinkFunction);
function jobsAssisstancePageLinkFunction(){
    window.location.href = "jobSeekingAssistance.html";
}

// (4) courses page.
let courses = document.querySelector("#JS_courses");
courses.addEventListener("click",coursesPageLinkFunction);
function coursesPageLinkFunction(){
    window.location.href = "courses.html"
}

// (5) career guidance page.
let careerGuidance = document.querySelector("#JS_careerGuidance");
careerGuidance.addEventListener("click",careerGuidancePageLinkFunction);
function careerGuidancePageLinkFunction(){
    window.location.href = "careerguidance.html"
}

// (6) sign up page.
let signUp = document.querySelector("#JS_signUpBtn");
signUp.addEventListener("click",signUpFunction);
function signUpFunction(){
    window.location.href = "signup.html";
}


// This is code for the display the user name.

let user = JSON.parse(localStorage.getItem("logInData"));

if(user != undefined){
    document.querySelector("#user").innerText = "HELLO"+"🖐,"+" "+user.name;
}else{
    document.querySelector("#user").innerText = "PLEASE LOGIN FOR THE CUSTOMIZATION";
}

// This is for the entarance of the cart page.
// (7) cart page.
let cart = document.querySelector("#JS_cartBtn");
cart.addEventListener("click",cartPageFunction);
function cartPageFunction(){
    if(user != undefined){
        window.location.href = "cart.html";
    }else{
        alert("PLEASE LOG IN FIRST TO OPEN THE CART PAGE.");
    }
}


