function retorno(conteudo) {
    if (!("erro" in conteudo)) {
      //Atualiza os campos com os valores.
      document.getElementById("resultado").value = conteudo;
    } else {
      alert("Usuários não encontrado.");
    }
  }

  function criaLinha(usuario) {
    console.log(usuario)
    linha = document.createElement("tr");
    tdId = document.createElement("td")
    tdEmail = document.createElement("td")
    tdSenha = document.createElement("td")
    tdId.innerHTML = usuario.id_login_pk
    tdEmail.innerHTML = usuario.email
    tdSenha.innerHTML = usuario.senha

    linha.appendChild(tdId)
    linha.appendChild(tdEmail)
    linha.appendChild(tdSenha)

    return linha;
  }

  function listar() {
    let request = new XMLHttpRequest();
    url = "http://127.0.0.1:3000/login";
    request.open("GET", url, false);
    request.send();
    let dados = request.responseText;
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    usuarios.forEach((element) => {
      let linha = criaLinha(element);
      tabela.appendChild(linha);
    });
  }

  main()