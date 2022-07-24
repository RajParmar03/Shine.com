// This code is for checking the login input with the signup inputs.

document.querySelector("form").addEventListener("submit",logInFunction);

function logInFunction(){
    event.preventDefault();

    let logInObject = {
        email : document.querySelector("#JS_logInEmail").value,
        password : document.querySelector("#JS_logInPassword").value
    }

    let signUpDataArr = JSON.parse(localStorage.getItem("signUpDataList")) || [];

    if(logInObject.email != "" && logInObject.password != ""){
        let ans = logInCheckFunction(logInObject,signUpDataArr);
        if(ans != false){
            alert("LOGIN SUCCESSFULLY.");
            localStorage.setItem("logInData",JSON.stringify(ans));
            document.querySelector("#JS_logInEmail").value = "";
            document.querySelector("#JS_logInPassword").value = "";
            window.location.href = "index.html";
        }else{
            alert("EMAIL ID AND PASSWORD ARE INCORRECT.");
        }
    }else if(logInObject.email == ""){
        alert("ENTER THE EMAIL ID.");
    }else if(logInObject.password == ""){
        alert("ENTER THE PASSWORD.");
    }else{
        alert("ENTER THE EMAIL ID AND PASSWORD");
    }
}

// This is the function for checking the login data with the signupdata.
function logInCheckFunction(logInObject,signUpDataArr){
    let signal = false;
     signUpDataArr.forEach(function(elem){
        if(elem.email == logInObject.email && elem.password == logInObject.password){
            signal = elem;
        }
     });
     return signal;
}