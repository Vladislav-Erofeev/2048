document.querySelector("#end p").addEventListener("click", () => {
    for(let i = 0; i < 4; i++)
        array[i] = [null, null, null, null]
    document.querySelector("#back_blur").style.display = "none";
    document.querySelector("#end").style.display = "none";
    array[generate()][generate()] = 2;
    draw(array)
})