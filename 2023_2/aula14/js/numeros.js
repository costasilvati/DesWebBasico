document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("meuForm");
    const resultado = document.getElementById("resultado");
    

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const n1 = document.getElementById("n1").value;
        const n2 = document.getElementById("n2").value;
        const n3 = document.getElementById("n3").value;
        let operacao = document.querySelector('input[type=radio]:checked');
        let result = 0;
         if(operacao.value === "+"){
            result = parseInt(n1) + parseInt(n2) + parseInt(n3);
        }else if(operacao.value === "*"){
            result = n1 * n2 * n3;
        }
        let texto = n1 +" "+operacao.value +n2 +" "+operacao.value+ n3 + "= " + result;
        resultado.innerHTML = texto;
    });
});
