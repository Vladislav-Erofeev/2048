function generate() {
    return Math.floor(Math.random() * 4);
}

function generateRandomBlock(array) {
    let x = generate();
    let y = generate()
    while(array[x][y] != null) {
        x = generate();
        y = generate();
    }
    let number = Math.floor(Math.random() * 4);
    if(number == 3) {
        array[x][y] = 4;
    } else {
        array[x][y] = 2;
    }
}