let button = document.getElementById("btn");
// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// click events
// button.addEventListener("click", function(e) {
//     // alert("Button clicked!");
//     document.querySelector(".box").innerHTML = "<b>Yay you were clicked</b> Enjoy your click!";
// });

// dblclick events
// button.addEventListener("dblclick", function(e) {
//     // alert("Button clicked!");
//     document.querySelector(".box").innerHTML = "<b>Yay you were clicked</b> Enjoy your click!";
// });

// // contextmenu events
// button.addEventListener("contextmenu", function(e) {
//     alert("Don't hack us by Right click Please!");
// });

// keydown events
// button.addEventListener("keydown", function(e) {
    // console.log(e);
document.addEventListener("keydown", function(e) {
    console.log(e.key, e.code, e.keyCode);
});