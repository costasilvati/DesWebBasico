import {valida} from './master.js'

const inputs = document.querySelectorAll('input')

inputs.forEach(input =>{
    input.addEventListener('onblur',(evento) =>{
        valida(evento.target)
    })
})