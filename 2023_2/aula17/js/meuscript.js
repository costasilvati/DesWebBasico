
function salvar(){
    let cor = document.getElementById('cor').value;
    document.body.style= "background-color: " + cor;
    let nome = document.getElementById('nome').value;
    let estilos = document.querySelector('input[type="checkbox"]:checked');
    let musical = '';
    for(let i = 0; i< estilos.length; i++){
        musical = musical + "," + estilos[i].value; 
    }
    let time = document.getElementById('time').value;
    let texto = `Um dia ${nome} estava escutando ${musical}
     e percebeu que estava no ${time}`;
     document.getElementById('resposta').innerHTML = texto;
}