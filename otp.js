// This is the very begining of the otp java script.
document.querySelector("form").addEventListener("submit",otpfunction);
function otpfunction(){
    event.preventDefault();

    let ans =  document.querySelector("#JS_otpEnter").value;
    if(ans == 9033){
        alert("YOU HAVE SUCCESSFULLY ENTER THE OTP. YOUR PAYMENT PROCESS IS IN PROGRESS. CHECK YOUR MAIL WE HAVE SEND YOUR PRODUCT LINK AND CREDENTIALS THERE.");
    }else{
        alert("YOU HAVE ENTERED THE WRONG OTP. PLEASE TRY AGAIN!!!");
        window.location.href = "cart.html";
    }

}