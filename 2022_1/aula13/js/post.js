function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }

    return request.responseText
}

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function cadastraUsuario() {
    //event.preventDefault()
    let url = "http://127.0.0.1:3000/login"
    let senha = document.getElementById("senha").value
    let email = document.getElementById("email").value
    console.log(senha)
    console.log(email)

    body = {
        "senha": senha,
        "email": email
    }

    fazPost(url, body)
}


function fazerLogin() {
    let senha = document.getElementById("senha").value
    let email = document.getElementById("email").value

    let url = "http://127.0.0.1:3000/login/sigin/"+email
    
    let dados = fazGet(url)
    let usuarios = JSON.parse(dados)
    let count = 0
    let senhaBanco = ""
    usuarios.forEach(element => {
        console.log(element)
        senhaBanco = element.senha
        count = 1
    });

    if(count == 0){
       alert("Usuário não encontrado!") 
    }else{
        if(senha == senhaBanco){
            alert("Logado com sucesso!")
        }else{
            alert("Senha incorreta!")
        }
    }
}