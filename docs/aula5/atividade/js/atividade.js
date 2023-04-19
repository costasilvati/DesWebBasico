 function imprimeTabuada(){
    let numero = document.getElementById('numero').value;
    let divisoria = document.getElementById("result");
    divisoria.innerHTML = `<p>A tabuada é ${numero}</p>`;
    for(let i = 0; i <= 10; i++){
        let calc = i*numero;
        const node = document.createElement("p");
        const text = document.createTextNode(
            `${numero} x ${i}: ${calc}`);
        node.appendChild(text);
        divisoria.appendChild(node);
    }
}

let cliques = 0;
function contador(){
    cliques++;
    document.getElementById("cliques").innerHTML = cliques;
}

function sortear(){
   let sorteado = parseInt(Math.random()*100);
   document.getElementById("sorteado").innerHTML = sorteado;
}