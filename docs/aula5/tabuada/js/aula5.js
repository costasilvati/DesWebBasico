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