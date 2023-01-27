function check(array) {
    let isNull = false;
    for(let i = 0; i < 4; i++)
        for(let j = 0; j < 4; j++)
            if(array[i][j] == null) {
                isNull = true;
            }
    if(isNull == false) {
        endGame()
        return;
    }
}

function endGame() {
    document.querySelector("#back_blur").style.display = "flex";
    document.querySelector("#end").style.display = "flex";
    let sum = 0;
    for(let i = 0; i < 4; i++)
        for(let j = 0; j < 4; j++)
            sum += array[i][j]
    document.querySelector("#end h2").innerHTML = `Score: ${sum}`;
}