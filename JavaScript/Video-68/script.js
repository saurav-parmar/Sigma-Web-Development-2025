console.log("Hello World");

// Example of getElementByClassName____

// let boxes = document.getElementsByClassName("box"); // isme class or id ke sath dot or hash nahi lagana padta hai
// console.log(boxes);

// boxes[2].style.background = "purple";
// -----------------------------------------------------------------

// Example of getElementById____
// document.getElementById("redbox").style.background = "red";
// -----------------------------------------------------------------

// Example of QuerySelector____
document.querySelector(".box").style.background = "green"; // isme class or Id ke sath dot ya hash lagana padta hai. yeh pehle box ka color change karega

document.querySelectorAll(".box").forEach(e =>{
    e.style.background = "green"; // yeh sabhi box ka color change karega
}); 
// -----------------------------------------------------------------