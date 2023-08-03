function fazGet(url){
    let req = new XMLHttpRequest()
    req.open("GET",url, false)
    req.send()
    return req.responseText
}

function editarLogin(){
    console.log('editar')
}

function deleteLogin(){
    console.log('excluir')
}

function criaButton(tipo){
    let botao = document.createElement('button')
    botao.className = "btn"
    let icone = document.createElement('i')
    if(tipo === "editar"){
        icone.className = "bi bi-pencil-square"
        botao.style = "color: DodgerBlue"
        botao.textContent = "Editar"
    }else if(tipo === "excluir"){
        icone.className = "bi bi-x-square"
        botao.style = "color: red;"
        botao.textContent = "Excluir"
    }
    botao.appendChild(icone)
    return(botao)
}

function fazLinha(usuario){
    let linha = document.createElement('tr')
    let colId = document.createElement('td')
    let colEmail = document.createElement('td')
    let colSenha = document.createElement('td')
    let colAcoes = document.createElement('td')
    // Cria botões editar e excluir
    let editar = criaButton("editar")
    editar.value = usuario.id_login_pk // associa id ao parametro do button
    editar.addEventListener("click", editarLogin)
    let excluir = criaButton("excluir")
    excluir.value = usuario.id_login_pk // associa id ao parametro do button
    excluir.addEventListener("click", deleteLogin)
    colAcoes.appendChild(editar)
    colAcoes.appendChild(excluir)
    colId.innerHTML = usuario.id_login_pk
    colEmail.innerHTML = usuario.email
    colSenha.innerHTML = usuario.senha
    linha.appendChild(colId)
    linha.appendChild(colEmail)
    linha.appendChild(colSenha)
    linha.appendChild(colAcoes)
    return linha
}


function main(){
    let dados = fazGet("http://localhost:3000/login")
    let tab = document.getElementById('corpotabela')
    let usuario = JSON.parse(dados)
    usuario.forEach(element => {
        let linha = fazLinha(element)
        tab.appendChild(linha)
    });
}

main()