function adivinhar(){
    let textos = document.querySelectorAll("input[type='text']");
    let secret = ["aluno", "prova", "bimestre 1", "nota 10"];
    let acertos = '';
    let contAcerto = 0;
    let back = '#'
    for(let i = 0; i < textos.length; i++){
        for(let sc = 0; sc < secret.length; sc++){
            if(textos[i].value === secret[sc]){
                acertos = acertos + " - " +textos[i].value;
                contAcerto++;
            }
        }
    }
    document.getElementById("resultado").innerHTML = "Você acertou: "+ contAcerto+" vezes os termos" +acertos;
    if(contAcerto === 4){
        let element = document.getElementsByClassName("container");
        element.style('background-color:green;');
    }
}