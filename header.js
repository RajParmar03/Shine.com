let imageliks = [
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fhackathon-new-d-yellow.png&w=1920&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop-Banner-changes.png&w=1920&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=1920&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fmint_d_banner.png&w=1920&q=75",
    "https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75"];


let imageState = 0;
let crauser = document.getElementById("crauser")

let leftbtn = document.getElementById("left-btn");
leftbtn.addEventListener("click",leftfunction);

let rightbtn = document.getElementById("right-btn");
rightbtn.addEventListener("click",rightfunction);


function rightfunction(){
    imageState++;
    if(imageState == imageliks.length){
        imageState = 0; 
    }
    crauser.src = imageliks[imageState];
}

function leftfunction(){
    imageState--;
    if(imageState < 0){
        imageState = imageliks.length-1;
    }
    crauser.src = imageliks[imageState];
}