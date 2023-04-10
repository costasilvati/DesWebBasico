function sortear(){
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let sorteado = parseInt(Math.random() * (max - min) + min);
    document.getElementById("sorteado").innerHTML = sorteado;
 }