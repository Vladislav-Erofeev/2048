let colors = {
    null: "#cabeb3",
    2: "#eee4da",
    4 : "#ebdec7",
    8 : "#f39463",
    16 : "#f39463",
    32 : "#f47b5f",
    64 : "#f45d3c",
    128 : "#ebcd72",
    256 : "#ebca61",
    512 : "#ebca61",
    1024 : "#ebca61",
    2048 : "#ebc02f",
}

let field = document.querySelectorAll("td")
let score = document.querySelector("#main_area p");

function draw(array) {
    let sum = 0;
    for(let i = 0; i < 4; i++)
        for (let j = 0; j < 4; j++) {
            sum += array[i][j];
            field[i*4 + j].innerHTML = array[i][j];
            field[i*4 + j].style.backgroundColor = colors[array[i][j]];
            if(array[i][j] > 4) {
                field[i*4 + j].style.color = "white";
            } else {
                field[i*4 + j].style.color = "#776e65";
            }
        }
    score.innerHTML = `Score: ${sum}`
}

function consoleWrite(array) {
    for(let i = 0; i < 4; i++) {
        console.log(array[i]);
    }
    console.log(" ");
}