
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


function cadastraUsuario() {
    event.preventDefault()
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