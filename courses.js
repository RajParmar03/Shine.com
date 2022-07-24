// // This is the very begining of the js part of the courses page.

// let user = JSON.parse(localStorage.getItem("logInData"));

// if(user != undefined){
//     document.querySelector("#user").innerText = "HELLO"+"🖐,"+" "+user.name;
// }else{
//     document.querySelector("#user").innerText = "PLEASE LOGIN FOR THE CUSTOMIZATION";
// }


// This is code for storing the data in to the local storage.

let cartArr = JSON.parse(localStorage.getItem("cartDataList")) || [];

document.querySelector("#JS_cp1btn").addEventListener("click",cp1cartfunction);
function cp1cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_cp1 h3").innerText,
        Pprice : document.querySelector("#JS_cp1 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_cp2btn").addEventListener("click",cp2cartfunction);
function cp2cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_cp2 h3").innerText,
        Pprice : document.querySelector("#JS_cp2 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_cp3btn").addEventListener("click",cp3cartfunction);
function cp3cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_cp3 h3").innerText,
        Pprice : document.querySelector("#JS_cp3 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_cp4btn").addEventListener("click",cp4cartfunction);
function cp4cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_cp4 h3").innerText,
        Pprice : document.querySelector("#JS_cp4 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_cp5btn").addEventListener("click",cp5cartfunction);
function cp5cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_cp5 h3").innerText,
        Pprice : document.querySelector("#JS_cp5 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}

document.querySelector("#JS_cp6btn").addEventListener("click",cp6cartfunction);
function cp6cartfunction(){
    let cartObject = {
        Pname : document.querySelector("#JS_cp6 h3").innerText,
        Pprice : document.querySelector("#JS_cp6 h4>span").innerText
    }

    cartArr.push(cartObject);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
}