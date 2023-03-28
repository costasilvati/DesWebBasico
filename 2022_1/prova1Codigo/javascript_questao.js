let txt = "";
function funcao(value, index, array) {
    if (index % 2 == 0) {
        txt += value
    };
}
function xpto (x) {
    for(let i = 0; i < 6; i++){
        funcao(x[i], i, x)
    }
    return txt;
}
console.log(xpto([0, 1, 1, 2, 3, 5]));
