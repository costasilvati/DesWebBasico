console.log("Trabalhando com vetores (Arrays)");

const listaDeDisciplinas = new Array(
    'Tópicos Especiais',
    'Desenvolvimento Web Básico',
    'Desenvolvimento de Software');

// listaDeDisciplinas[3] = 'Meio ambiente';
listaDeDisciplinas.push('Meio ambiente');
listaDeDisciplinas.push('Engenharia de Software');

console.log(`Antes do splice ${listaDeDisciplinas}`);

// splice
listaDeDisciplinas.splice(4, 1);

console.log(listaDeDisciplinas);
console.log(listaDeDisciplinas[1]);

console.log('Repetição');

for (var i = 0; i < 100; i++) {
    console.log(i);
}
