console.log("Hello World");

document.body.firstElementChild // Selects the first child element of the body
document.body.firstElementChild.childNodes // Selects all child nodes of the first child element of the body
document.body.firstElementChild.children // Selects all child elements of the first child element of the body
document.body.firstElementChild.children[0] // Selects the first child element of the first child element of the body
document.body.firstElementChild.children[3].nextElementSibling // Selects the next sibling element of the fourth child element of the first child element of the body
document.body.firstElementChild.children[3].previousElementSibling // Selects the previous sibling element of the fourth child element of the first child element of the body
document.body.firstElementChild.children[3].parentElement // Selects the parent element of the fourth child element of the first child element of the body
document.body.firstElementChild.children // Selects all child elements of the first child element of the body
document.body.children[1] // Selects the second child element of the body
document.body.children[1].rows // Selects all rows of the second child element of the body
document.body.style.color = "red" // Changes the text color of the body to red
document.body.style.backgroundColor = "blue" // Changes the background color of the body to blue
document.body.firstElementChild.children[3].style.color = "pink" // Changes the background color of the fourth child element of the first child element of the body to red