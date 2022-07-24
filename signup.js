//This is the linking of the login page.

let logIn = document.querySelector("#JS_logIn");
logIn.addEventListener("click",logInPageLinkFunction);
function logInPageLinkFunction(){
    window.location.href = "login.html";
}

//This is the code for saving the data of signup users in the local storage.

let signUpDataArr = JSON.parse(localStorage.getItem("signUpDataList")) || [];
document.querySelector("form").addEventListener("submit",signUpDataFunction);

function signUpDataFunction(){
    event.preventDefault();

    let signUpDataObject = {
        name : document.querySelector("#JS_signUpName").value,
        email : document.querySelector("#JS_signUpEmail").value,
        mobile : document.querySelector("#JS_signUpMobile").value,
        password : document.querySelector("#JS_signUpPassword").value
    }
    signUpDataArr.push(signUpDataObject);
    localStorage.setItem("signUpDataList",JSON.stringify(signUpDataArr));

    //This is for to empty the input boxes after clicking on the continue button.
    document.querySelector("#JS_signUpName").value = "";
    document.querySelector("#JS_signUpEmail").value = "";
    document.querySelector("#JS_signUpMobile").value = "";
    document.querySelector("#JS_signUpPassword").value = "";
}

// This code is for the functionality of the logout button.

let logOut = document.querySelector("#JS_logOut");
logOut.addEventListener("click",logOutFunction);
function logOutFunction(){
    alert("LOGGED OUT SUCCESSFULLY.")
    localStorage.removeItem("logInData");
    window.location.href = "index.html";
}