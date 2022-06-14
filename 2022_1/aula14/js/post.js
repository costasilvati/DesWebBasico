function fazPost(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }
    return request.responseText
}

function cadastraUsuario(){
    const url = 'http://127.0.0.1 :3000/login'
    let senha = document.getElementById('senha').value
    let email = document.getElementById('login').value
    body = {
        "email":email,
        "senha":senha
    }
    fazPost(url, body)
}