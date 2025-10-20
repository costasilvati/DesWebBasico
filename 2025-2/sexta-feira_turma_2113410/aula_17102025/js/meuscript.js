function exibir(){
    let paragrafo = document.getElementById("nome");
    console.log(paragrafo);
    paragrafo.innerHTML = "Exibindo Nome!!!!"
}

// Escreva a função ocultar que apaga o texto do paragrafo "nome"

function ocultar(){
    document.getElementById("nome").innerHTML = '';
}