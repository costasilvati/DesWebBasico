function editaConteudo(){
    rn = window.prompt("Digite a linha que deseja editar", "0");
    cn = window.prompt("Digite a coluna que deseja editar","0");
    content = window.prompt("Digite o novo conteúdo");  
    var x = document.getElementById('tabela').
    rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;
}


