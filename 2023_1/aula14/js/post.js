// functions
function fazPost(url, body){
    let req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-type", "application/json")
    req.send(JSON.stringify(body))
    req.onload = function(){
        console.log(this.responseText)
    }
    return req.responseText
}

function cadastrarUsuario(){
    let url = "http://localhost:3000/login"
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    body = {
        "email": email,
        "senha": senha,
        "nascimento": dn
    }
    fazPost(url, body)
}
