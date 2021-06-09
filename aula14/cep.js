function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById('rua').value=conteudo.logradouro;
        document.getElementById('bairro').value=conteudo.bairro;
        document.getElementById('cidade').value=conteudo.localidade;
        document.getElementById('uf').value=conteudo.uf;
    }else{
        alert("CEP não econtrado");
    }
}


function pesquisacep(valor){
    var cep = valor.replace(/\D/g, '');

    if(cep != ""){
        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            var script = document.createElement('script');

            script.src = "https://viacep.com.br/ws/"+ cep +"/json/?callback=meu_callback";         
            document.body.appendChild(script)
        }else{
            alert("Formato de CEP inválido")
        }
    }
}