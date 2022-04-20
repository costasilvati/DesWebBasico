function insertRow(){
    // coleta uma linha relacionada a tabela
    let novaLinha = document.getElementById('tabela').insertRow(0)
    let novaColuna1 = novaLinha.insertCell(0)
    let novaColuna2 = novaLinha.insertCell(1)
    novaColuna1.innerHTML = "coluna 1"
    novaColuna2.innerHTML = "coluna 2"
}

function editContent(){
    let linha = window.prompt("Digite a linha que deseja editar:")
    let coluna = window.prompt("Digite a coluna que deseja editar:")
    let conteudo = window.prompt("Digite o CONTEÚDO ")
    let linhaNum = parseInt(linha)
    let colunaNum = parseInt(coluna)
    //window.alert(`linhaNum: ${linhaNum} - colunaNum: ${colunaNum}`)
    let celula = document.getElementById('tabela2').rows[linhaNum].cells
    celula[colunaNum].innerHTML = conteudo
}