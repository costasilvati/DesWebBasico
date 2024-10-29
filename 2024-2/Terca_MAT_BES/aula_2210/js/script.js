function mudaCor(){
    document.getElementById('p1').style.color = "red";
}

function mudaTamanho(){
    document.getElementById('p2').style.fontSize = '150%';
}

function mudaDisplay(){
    var p3 = document.getElementById('p3');
    if(p3.style.display === 'none'){
        p3.style.display = 'block';
    }else{
        p3.style.display = 'none';
    }
    
}

function verMensagem(){
    window.alert("Esta é uma mensagem");
}