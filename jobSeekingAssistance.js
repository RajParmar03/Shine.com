// // This is the very begining of the js part of the job seeking assisstance page.

// let user = JSON.parse(localStorage.getItem("logInData"));

// if(user != undefined){
//     document.querySelector("#user").innerText = "HELLO"+"🖐,"+" "+user.name;
// }else{
//     document.querySelector("#user").innerText = "PLEASE LOGIN FOR THE CUSTOMIZATION";
// }

//This code is for the collact the information for display it on the cart.

let cartArr = JSON.parse(localStorage.getItem("cartDataList")) || [];

document.querySelector("#JS_jsa1btn").addEventListener("click",jsa1cartfunction);
function jsa1cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_jsa1 h3").innerText,
        Pprice : document.querySelector("#JS_jsa1 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",cartArr);
}

document.querySelector("#JS_jsa2btn").addEventListener("click",jsa2cartfunction);
function jsa2cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_jsa2 h3").innerText,
        Pprice : document.querySelector("#JS_jsa2 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",cartArr);
}

document.querySelector("#JS_jsa3btn").addEventListener("click",jsa3cartfunction);
function jsa1cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_jsa3 h3").innerText,
        Pprice : document.querySelector("#JS_jsa3 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",cartArr);
}