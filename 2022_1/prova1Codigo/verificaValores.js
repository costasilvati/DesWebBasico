function verificarCorretos(){
    let arrayChave = new Array(3, 5, 9, 12)
    let acertos = 0
    let valorCerto = ""
    let entradas = new Array();
    entradas.push(Number(document.getElementById('in1').value),Number(document.getElementById('in2').value),Number(document.getElementById('in3').value),Number(document.getElementById('in4').value))
    console.log(entradas)
    
    for(let i=0; i< 4; i++){
        if(entradas[i] == arrayChave[i]){
            acertos++
            valorCerto += `${entradas[i]}, `
        }else{
            for(let j=0; j< 4; j++){
                if (entradas[i] == arrayChave[j]){
                    acertos++
                    valorCerto += `${entradas[i]},  `
                }
            } 
        }
    }
    if(acertos == 0){
        document.body.style.backgroundColor = "red"
    }
    document.getElementById('resultado').innerHTML = `Acertos ${acertos} - Valores corretos ${valorCerto}`
}

function verificarErros(){
    let arrayChave = new Array(3, 5, 9, 12)
    let erros = 0
    let valorErrado = ""
    let valorSecreto = ""
    let certo = false
    let entradas = new Array();
    entradas.push(Number(document.getElementById('in1').value),Number(document.getElementById('in2').value),Number(document.getElementById('in3').value),Number(document.getElementById('in4').value))
    console.log(entradas)
    
    for(let i=0; i< entradas.length; i++){
        if(entradas[i] == arrayChave[i]){
            valorSecreto += `Valor ${entradas[i]} está entre os valores secretos, na ordem correta.<br>`
            certo = true
        }else{
            for(let c= 0; c < arrayChave.length; c++){
                if(entradas[i] == arrayChave[c]){
                    valorSecreto += `Valor ${entradas[i]} está entre os valores secretos, porem na ordem errada.<br>`
                    certo = true
                }
            }
            if(!certo){
                erros++
                valorErrado += ` ${entradas[i]}, `
                certo = false
            }
        }
    }
    document.getElementById('resultado').innerHTML = `Erros: ${erros} - Valores errados: ${valorErrado}`
    if(erros == 0){
        document.body.style.backgroundColor = "red"
    }
}