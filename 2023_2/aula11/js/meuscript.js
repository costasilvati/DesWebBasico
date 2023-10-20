function copiarTexto(){
    let texto = document.getElementById('p1').innerHTML;
    document.getElementById('p2').innerHTML = texto;
}

function ligar(){
    document.getElementById('bulb').src = 
                            "https://www.w3schools.com/js/pic_bulbon.gif";
}

function desligar(){
    document.getElementById('bulb').src = 
                            "https://www.w3schools.com/js/pic_bulboff.gif"
}

function estilizar(){
    document.getElementById('paragrafo').style.fontSize='50px';
}

function ocultar(){
    document.getElementById('paragrafo').style.display = 'none';
}

function exibirJanela(){
    window.alert("Esta é uma janela feita em JS!!");
    console.log("Olá!!");
}