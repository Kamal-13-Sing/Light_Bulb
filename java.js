// bulb on function
function on(){
    let bulb = document.querySelector(".bulboff");
    bulb.setAttribute("src", "image/bulb1.png");
}
// bulb off function
function off(){
    let bulb = document.querySelector(".bulboff");
    bulb.setAttribute("src", "image/bulb0.png");
}