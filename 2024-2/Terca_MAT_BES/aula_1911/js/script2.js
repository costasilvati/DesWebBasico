document.getElementById('jogo').hidden = true;

function iniciar() {
    document.getElementById('jogo').hidden = false;
    // Gerar divs arrastáveis aleatórias
}

// Arrastar divs
var draggables = document.querySelectorAll('.draggable');
var dropzones = document.querySelectorAll('.dropzone');

for (var i = 0; i < draggables.length; i++) {
    draggables[i].addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
}

for (var j = 0; j < dropzones.length; j++) {
    dropzones[j].addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    dropzones[j].addEventListener('drop', function(event) {
        event.preventDefault();
        var draggableId = event.dataTransfer.getData('text/plain');
        var draggable = document.getElementById(draggableId);
        var dropzoneId = event.target.id;

        // Verificação se a div foi solta na dropzone correta
        if (draggableId === 'draggable' + dropzoneId.replace('dropzone', '')) {
            var x = event.clientX - dropzone.offsetLeft - draggable.offsetWidth / 2;
            var y = event.clientY - dropzone.offsetTop - draggable.offsetHeight / 2;
            draggable.style.left = dropzone.offsetLeft + x + 'px';
            draggable.style.top = dropzone.offsetTop + y + 'px';
            alert('A ' + draggableId + ' foi solta na ' + dropzoneId + ' correta!');
        } else {
            alert('A ' + draggableId + ' não pertence à ' + dropzoneId + '. Tente novamente.');
        }
    });
}