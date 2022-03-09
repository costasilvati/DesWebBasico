function transferir(){
    var x = document.getElementById('texto').textContent 
    
    document.getElementById('copia').innerHTML = 
    '*Cópia: '+ x
}

function ligaLampada(){
    document.getElementById('lampada').src =
     "./img/pic_bulbon.gif"
}

function apagaLampada(){
    document.getElementById('lampada').src = 
    "./img/pic_bulboff.gif"
}

function aumentaFonte(){
    document.getElementById('parestilo').style.fontSize 
    = '50px'
}

function alteraCor(){
    document.getElementById('parestilo').style.color =
     'red'
}

function alteraAlinhamento(){
    document.getElementById('parestilo').style = 
    "text-align: center"
}