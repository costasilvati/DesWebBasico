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

function cadastrarUsuario(){
    let url = 'http://localhost:3000/login';
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    body = {
        "email":email,
        "senha":senha
    }
    console.log(body);
    fazPost(url, body);
}