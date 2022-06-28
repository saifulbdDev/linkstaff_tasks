

let wrapperHeight = document.getElementById("wrapper").offsetHeight;
let blue_box = document.getElementById("box");
let animateDirection = 0; // animation direction, Ex- 0 for animate right bottom.


 /*
   * The logic of the solution is: When the box touches the edge,
   * change the box's going direction to PositionLeft. 
   * As the function is getting called every second, the values  
   * the 'animateDirection' value globally and check every time, if the  
   */
const animateBox = () => {

    let PositionLeft = blue_box.offsetLeft;
    let PositionTop = blue_box.offsetTop;
   
    if ((PositionLeft + 100) >= screen.width || (PositionTop + 100) >= wrapperHeight) {
        animateDirection = 1;
    } else if (blue_box.offsetLeft < 0) {
        animateDirection = 0;
    }

    if (animateDirection === 0) {
        PositionLeft = PositionLeft + 10;
        PositionTop = PositionTop + 10;
    } else {
        PositionLeft = PositionLeft - 10;
        PositionTop = PositionTop - 10;
    }

    blue_box.style.left = PositionLeft + "px";
    blue_box.style.top = PositionTop + "px";

  
}

setInterval(animateBox, 1000);


