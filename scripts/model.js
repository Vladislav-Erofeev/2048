let array = new Array(4);
for(let i = 0; i < 4; i++)
    array[i] = [null, null, null, null];

generateRandomBlock(array)
draw(array)

document.addEventListener("keydown", (event) => {
    if(event.key == "ArrowUp") {
        moveUp(array);
    } else if(event.key == "ArrowDown") {
        moveDown(array);
    } else if(event.key == "ArrowLeft") {
        moveLeft(array)
    } else if(event.key == "ArrowRight") {
        moveRight(array)
    }
    draw(array)
})

let eventStart = null;
let eventEnd = null;

document.addEventListener("touchstart", function (e) {
    eventStart = e;
});
document.addEventListener("touchmove", function (e) {
    eventEnd = e;
});
document.addEventListener("touchend", function (e) {
    let deltaX = eventEnd.touches[0].pageX - eventStart.touches[0].pageX;
    let deltaY = eventEnd.touches[0].pageY - eventStart.touches[0].pageY;
    if(Math.abs(deltaX) > Math.abs(deltaY)) {
        if(deltaX > 0)
            moveRight(array)
        else
            moveLeft(array)
    } else {
        if(deltaY > 0)
            moveDown(array)
        else
            moveUp(array)
    }
    draw(array)
});