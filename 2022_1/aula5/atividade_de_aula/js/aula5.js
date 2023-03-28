function imprimeTabuada(){
    const numero = document.getElementById('tabuada').value;
    let divResult = document.getElementById('result')
    divResult.innerHTML = `<p> A tabuada escolhida é ${numero} </p>`;
    for(let i =0; i <= 10; i++){
        let res = numero * i;
        const node = document.createElement("li");
        const text = document.createTextNode(`${numero} x ${i}: ${res}`);
        node.appendChild(text);
        document.getElementById("result").appendChild(node);
    }
}

function imprimeAllTabuada(){
    const node = document.createElement("div");
    const node5 = document.createElement("div");
    for(let l =0; l <= 10; l++){
        let linha = "";
        for(let c = 0; c <= 10; c++){
            let res = c * l;
            const text = document.createTextNode(`${c} x ${l}: ${res}  |`);
            if(l > 5){
                node5.appendChild(text);
                document.getElementById("result").appendChild(node5);
            }else{
                node.appendChild(text);
                document.getElementById("result").appendChild(node);
            }
        }
    }
}