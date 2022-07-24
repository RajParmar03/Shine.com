// // This is the very begining of the js part of the home page.

// let user = JSON.parse(localStorage.getItem("logInData"));

// if(user != undefined){
//     document.querySelector("#user").innerText = "HELLO"+"🖐,"+" "+user.name;
// }else{
//     document.querySelector("#user").innerText = "PLEASE LOGIN FOR THE CUSTOMIZATION";
// }

//This code is for going into signup page.
document.querySelector("#JS_profileSignUp").addEventListener("click",signUpViaFunction);
function signUpViaFunction(){
    window.location.href = "signup.html";
}

// This code is for adding items to localstorage.
let cartArr = JSON.parse(localStorage.getItem("cartDataList")) || [];

document.querySelector("#JS_hp1btn").addEventListener("click",hp1function);
function hp1function(){
   
    let cartObject = {
        Pname : document.querySelector("#JS_hp1 h3").innerText,
        Pprice : document.querySelector("#JS_hp1 h4>span").innerText
    }
    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_hp2btn").addEventListener("click",hp2function);
function hp2function(){
   
    let cartObject = {
        Pname : document.querySelector("#JS_hp2 h3").innerText,
        Pprice : document.querySelector("#JS_hp2 h4>span").innerText
    }
    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_hp3btn").addEventListener("click",hp3function);
function hp3function(){
   
    let cartObject = {
        Pname : document.querySelector("#JS_hp3 h3").innerText,
        Pprice : document.querySelector("#JS_hp3 h4>span").innerText
    }
    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_hp4btn").addEventListener("click",hp4function);
function hp4function(){
   
    let cartObject = {
        Pname : document.querySelector("#JS_hp4 h3").innerText,
        Pprice : document.querySelector("#JS_hp4 h4>span").innerText
    }
    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_hp5btn").addEventListener("click",hp5function);
function hp5function(){
   
    let cartObject = {
        Pname : document.querySelector("#JS_hp5 h3").innerText,
        Pprice : document.querySelector("#JS_hp5 h4>span").innerText
    }
    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_hp6btn").addEventListener("click",hp6function);
function hp6function(){
   
    let cartObject = {
        Pname : document.querySelector("#JS_hp6 h3").innerText,
        Pprice : document.querySelector("#JS_hp6 h4>span").innerText
    }
    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}