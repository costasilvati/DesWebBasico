function fazGet(url){
    let req = new XMLHttpRequest()
    req.open("GET",url, false)
    req.send()
    return req.responseText
}

function fazLinha(usuario){
    let linha = document.createElement('tr')
    let colId = document.createElement('td')
    let colEmail = document.createElement('td')
    let colSenha = document.createElement('td')
    colId.innerHTML = usuario.id_login_pk
    colEmail.innerHTML = usuario.email
    colSenha.innerHTML = usuario.senha
    linha.appendChild(colId)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)
    return linha
}

function main(){
    let dados = fazGet("http://localhost:3000/login")
    let tab = document.getElementById('tabela')
    let usuario = JSON.parse(dados)
    usuario.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}

main()