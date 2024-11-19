document.getElementById('jogo').hidden = true;

function iniciar(){
    document.getElementById('jogo').hidden = false;
    //Gerar divs arrastáveis aleatórias

}

// Arrastar divs
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    dropzone.addEventListener('drop', (event) => {
        event.preventDefault();
        const draggableId = event.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(draggableId);
        const dropzoneId = event.target.id;

        // Verificação se a div foi solta na dropzone correta
        if (draggableId === `draggable${dropzoneId.replace('dropzone', '')}`) {
            const x = event.clientX - dropzone.offsetLeft - draggable.offsetWidth / 2;
            const y = event.clientY - dropzone.offsetTop - draggable.offsetHeight / 2;
            draggable.style.left = `${dropzone.offsetLeft + x}px`;
            draggable.style.top = `${dropzone.offsetTop + y}px`;
            alert(`A ${draggableId} foi solta na ${dropzoneId} correta!`);
        } else {
            alert(`A ${draggableId} não pertence à ${dropzoneId}. Tente novamente.`);
        }
    });
});
