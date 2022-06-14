function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(dados){
    let linha = document.createElement("tr")
    let colId = document.createElement("td")
    let colEmail = document.createElement("td")
    colId.innerHTML = dados.id_login_pk
    colEmail.innerHTML = dados.email

    linha.appendChild(colId)
    linha.appendChild(colEmail)
    return linha
}

function main(){
    let dados = fazGet("http://127.0.0.1:3000/login")
    let tabela = document.getElementById('table')
    let usuarios = JSON.parse(dados)
    usuarios.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)
    });
}

main()