// This is the very begining of the js part of the cart page.

// let user = JSON.parse(localStorage.getItem("logInData"));

// if(user != undefined){
//     document.querySelector("#user").innerText = "HELLO"+"🖐,"+" "+user.name;
// }else{
//     document.querySelector("#user").innerText = "PLEASE LOGIN FOR THE CUSTOMIZATION";
// } 

// This is the functionality for the display the username on the cart page.

if(user != undefined){
    document.querySelector("#user_name").innerText = "HI,"+" "+user.name;
}else{
    document.querySelector("#user_name").innerText = "PLEASE LOGIN FIRST";
}  

// This code is for display the content of the local storage on the cart page.

let cartArr = JSON.parse(localStorage.getItem("cartDataList")) || [];

display(cartArr);

function display(cartArr){
    document.querySelector(".items").innerHTML = "";
    let sum = 0;

    cartArr.forEach(function(elem,i){

        let products = document.createElement("div");
        let divforhead = document.createElement("div");
        let divfordelete = document.createElement("div");

        let head = document.createElement("h2");
        head.innerText = elem.Pname;

        let price = document.createElement("h4");
        price.innerText = elem.Pprice;

        let deletekey = document.createElement("p");
        deletekey.innerText = "DELETE";
        deletekey.addEventListener("click",function(){
            deleteFunction(elem,i);
        });

        sum = sum + Number(elem.Pprice);

        divforhead.append(head,price);
        divfordelete.append(deletekey);
        products.append(divforhead,divfordelete);
        document.querySelector(".items").append(products);
    });
    document.querySelector(".summary span").innerText = sum;
}

// This is the delete function.
function deleteFunction(elem,i){
    cartArr.splice(i,1);
    localStorage.setItem("cartDataList",JSON.stringify(cartArr));
    display(cartArr);
}


//This code is for the coupon code thing.
document.querySelector("form").addEventListener("submit",couponCodeFunction);
function couponCodeFunction(){
    event.preventDefault();
    let code = document.querySelector("#JS_couponCode").value;

    if(code == "MASAI0266"){
        alert("CONGRATULATIONS, YOU HAVE ENTER THE COUPON CODE SUCCESSFULLY. YOU GOT 30% DISCOUNT.")
        countfunction();
    }else{
        alert("SORRY, YOU HAVE ENTERED WRONG COUPON CODE. TRY AGAIN!!!");
    }
}

function countfunction(){
    let total = document.querySelector(".summary span").innerText;
    total = total - (Number(total)*30)/100;
    document.querySelector(".summary span").innerText = total;
}