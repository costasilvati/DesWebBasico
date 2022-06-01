function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    console.log(usuario.email)
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");
    tdId.innerHTML = usuario.id_login_pk
    tdNome.innerHTML = usuario.email

    linha.appendChild(tdId);
    linha.appendChild(tdNome);

    return linha;
}

function main() {
    let data = fazGet("http://127.0.0.1:3000/login");
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()