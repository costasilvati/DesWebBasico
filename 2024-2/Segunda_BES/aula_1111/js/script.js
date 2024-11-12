function verRadios(){
    var elementos = document.getElementsByName('f');
    for(let i=0; i<elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById('radios').innerHTML = 
            'Você ' + elementos[i].value + ' é feliz';
        }
    }
}

function verSelect(){
    let selectElement = document.querySelector('#select1');
    let output = selectElement.value;
    document.querySelector('.output').textContent = output;
}

function verChecks(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = ""; // variável para colocar textos das checkboxes
    for(let i=0; i<checkboxes.length; i++){
        text = `${text} ${checkboxes[i].value},`;
        //text = text + ", "+checkboxes[i].value;
    }
    document.getElementById('checkboxes').innerHTML = text;
}















/*
Gabriel Felipe
Victor Barata   
Vitor Hugo
Gabriel Magro
Yuri
Vinicius
Matheus Kuramoto
Rodrigo
Otavio
João Vitor Marques
Giovani
Ghabriel
Metheus Moraes
Gabriel Matheus
Jhonattan
Alisson
Gabriel Igor
Renan
Marcos Ezequiel
Wilson
Luan Marques
João victor de Almeida
*/