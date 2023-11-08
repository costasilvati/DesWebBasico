function displayRadioValue(){
    var elementos = document.getElementsByName('gender');
    for(i = 0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('result').innerHTML = 
            "O genero selecionado é "+ elementos[i].value;
        }
    }
}

function getOption(){
    let selectElement = document.querySelector('#select1');
    let output = selectElement.value;
    document.querySelector('.output').textContent = output;
}

function getCheckBox(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(i = 0; i < checkBoxes.length; i++){
        text = `${text} ${checkBoxes[i].value}, `;
    }
    document.getElementById('pri').innerHTML = text;
}