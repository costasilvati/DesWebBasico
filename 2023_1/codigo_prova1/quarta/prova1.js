function calcular(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let n3 = parseInt(document.getElementById('n3').value);
    let operacao = document.querySelector('input[type=radio]:checked');
    let result = 0;
    if(n1 === 0 || n2 === 0 || n3 === 0){
        document.querySelector('body').style.backgroundColor = 'blue';
    }else{
        document.querySelector('body').style.backgroundColor = 'white';
    }

    if(operacao.value === "+"){
        result = n1 + n2 + n3;
    }else if(operacao.value === "*"){
        result = n1 * n2 * n3;
    }
    document.getElementById('resultado').innerHTML = 
    n1 +"- " +n2 +" - "+ n3 + operacao.value + result;

    if(result === 62){
        document.getElementById('resultado').innerHTML = 
    "SUCESSO!! "+n1 +"- " +n2 +" - "+ n3 + operacao.value + result;
    }else if(result >= (62 -6) && result <= (62+6) && result != 62){
        document.getElementById('dica').innerHTML = "Dica: Falta pouco!";
    }else{
        document.getElementById('dica').innerHTML = "Dica: ??";
    }

   
}