// document.querySelector(".box")
// document.querySelector(".box").innerHTML
// document.querySelector(".box").outerHTML
// document.querySelector(".box").tagName
// document.querySelector(".box").nodeName
// document.querySelector(".box").innerHTML = "Hey i am Saurav."
// document.querySelector(".box").hasAttribute("style")
// document.querySelector(".box").getAttribute("style")
// document.querySelector(".box").setAttribute("style, display: inline-block;")
// document.querySelector(".box").attributes
// document.querySelector(".box").removeAttribute("style")
// document.designMode = "on" // This will allow you to edit the HTML of the page directly in the browser
// document.querySelector(".box").dataset

// document.querySelector(".container")
// document.querySelector(".container").innerHTML
// document.querySelector(".container").outerHTML
// document.querySelector(".container").tagName // This will return the tag name of the element only
// document.querySelector(".container").nodeName // This will return the text of overall element
document.querySelector(".container").classList
document.querySelector(".container").classList.add("saurav")
document.querySelector(".container").classList.remove("saurav")

// document.querySelector(".box").innerText
// document.querySelector(".container").innerText


// let div = document.createElement("div");
// div.innerHTML = "I have been inserted. <b>by Saurav</b>";
// div.setAttribute ("class", "box");
// document.querySelector(".container").append(div)

let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "<h1>Hey i am Saurav</h1>");