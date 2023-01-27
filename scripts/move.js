function moveDown(array) {
    let wasMoved = false;
    for(let i = 2; i >= 0; i--) {
        for(let j = 0; j < 4; j++) {
            if(array[i][j] != null) {
                let k = i + 1;
                while(k != 4) {
                    if(array[k][j] == array[i][j]) {
                        array[i][j] *= 2;
                        k++;
                        break;
                    }
                    if(array[k][j] != null)
                        break;
                    k++;
                }
                if(array[i][j] == array[k-1][j]) {
                    continue;
                }
                wasMoved = true
                array[k-1][j] = array[i][j];
                array[i][j] = null;
            }
        }
    }
    if(wasMoved)
        generateRandomBlock(array)
    else
        check(array)
}

function moveUp(array) {
    let wasMoved = false;
    for(let i = 1; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(array[i][j] != null) {
                let k = i - 1;
                while(k != -1) {
                    if(array[k][j] == array[i][j]) {
                        array[i][j] *= 2;
                        k--;
                        break;
                    }
                    if(array[k][j] != null)
                        break;
                    k--;
                }
                if(array[i][j] == array[k+1][j]) {
                    continue;
                }
                wasMoved = true;
                array[k+1][j] = array[i][j];
                array[i][j] = null;
            }
        }
    }
    if(wasMoved)
        generateRandomBlock(array)
    else
        check(array)
}

function moveLeft(array) {
    let wasMoved = false;
    for(let i = 0; i < 4; i++) {
        for(let j = 1; j < 4; j++) {
            if(array[i][j] != null) {
                let k = j - 1;
                while(k != -1) {
                    if(array[i][k] == array[i][j]) {
                        array[i][j] *= 2;
                        k--;
                        break;
                    }
                    if(array[i][k] != null)
                        break;
                    k--;
                }
                if(array[i][j] == array[i][k+1]) {
                    continue;
                }
                wasMoved = true
                array[i][k+1] = array[i][j];
                array[i][j] = null;
            }
        }
    }
    if(wasMoved)
        generateRandomBlock(array)
    else
        check(array)
}

function moveRight(array) {
    let wasMoved = false;
    for(let i = 0; i < 4; i++) {
        for(let j = 2; j >= 0; j--) {
            if(array[i][j] != null) {
                let k = j + 1;
                while(k != 4) {
                    if(array[i][k] == array[i][j]) {
                        array[i][j] *= 2;
                        k++;
                        break;
                    }
                    if(array[i][k] != null)
                        break;
                    k++;
                }
                if(array[i][j] == array[i][k-1]) {
                    continue;
                }
                wasMoved = true;
                array[i][k-1] = array[i][j];
                array[i][j] = null;
            }
        }
    }
    if(wasMoved)
        generateRandomBlock(array)
    else
        check(array)
}