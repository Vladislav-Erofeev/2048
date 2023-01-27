let array = new Array(4);
for(let i = 0; i < 4; i++)
    array[i] = [null, null, null, null];

generateRandomBlock(array)
draw(array)

document.addEventListener("keydown", (event) => {
    if(event.key == "ArrowUp") {
        moveUp(array);
        draw(array)
    } else if(event.key == "ArrowDown") {
        moveDown(array);
        draw(array)
    } else if(event.key == "ArrowLeft") {
        moveLeft(array)
        draw(array)
    } else if(event.key == "ArrowRight") {
        moveRight(array)
        draw(array)
    }
})