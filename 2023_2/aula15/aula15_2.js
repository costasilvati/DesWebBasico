document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById('formulario');

    form.addEventListener("submit", function(event){
        event.preventDefault();
        let numero = parseInt(document.getElementById("tabuada").value);
        let divResult = document.getElementById('result');
        for(i = 1; i <=10; i++){
            let paragrafo = document.createElement('p');
            paragrafo.textContent = numero + " * "+ i + " = "+ (numero*i);
            divResult.appendChild(paragrafo);
        }
    })
})