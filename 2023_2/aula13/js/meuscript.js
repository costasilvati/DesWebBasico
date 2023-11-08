function displayRadioValue(){
    let elementos = document.getElementsByName('gender');
    for(i = 0; i < elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('result').innerHTML = 
                            "Genero selecionado é " + elementos[i].value;
        }
    }
}

function getOption(){
    let selectElement = document.querySelector('#select1');
    let out = selectElement.value;
    document.querySelector('.output').textContent = out;
}

function getCheckedBox(){
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(i=0; i<checkBoxes.length; i++){
        if(i == (checkBoxes.length-1)){
            text = `${text} ${checkBoxes[i].value}.`;
        }else{
            text = `${text} ${checkBoxes[i].value}, `;
        }   
    }
    document.getElementById('pri').textContent = text;
}