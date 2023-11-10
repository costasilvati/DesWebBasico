document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.getElementById('formulario');// id do form
   
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        // sua lógica
        let numero = document.getElementById('tabuada').value;
        let divResult = document.getElementById('result');
        divResult.innerHTML = "";
        for(i=1; i<=10; i++){
            let result = parseInt(numero) * i;
            let texto = document.createTextNode(`${numero} x ${i} = ${result}`);
            let node = document.createElement('p');
            node.appendChild(texto);
            divResult.appendChild(node);
        }
        // sua lógica
    })
})
























function imprimeTabuada(){
    const numero = document.getElementById('tabuada').value;
    let divResult = document.getElementById('result')
    divResult.innerHTML = `<p> A tabuada escolhida é ${numero} </p>`;
    for(let i =0; i <= 10; i++){
        let res = numero * i;
        const node = document.createElement("p");
        const text = document.createTextNode(`${numero} x ${i}: ${res}`);
        node.appendChild(text);
        document.getElementById("result").appendChild(node);
    }
}