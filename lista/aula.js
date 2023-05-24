/* const aluno = ["joao","vitor","marina"]
console.log(aluno);
console.log(aluno.shift())
delete aluno[1]

aluno.push("Renan","juca")
console.log(aluno);
const nome = "VITOR " */
/* const notas = []
console.log(notas)
notas.push(2)
notas.push(5)
notas.push(13)
let soma = 0;
console.log(notas);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
    console.log(nota);
}
const media = soma /notas.length
console.log(media)
 */

/* const numero = []
for (let i = 0; i < 100; i++) {
    numero.push(i)
}
for (let i = 0; i < numero.length; i++) {
    console.log(numero[i]);;
}
console.log(numero)
for (let i = 0; i < numero.length; i++) {
    if(numero[i] % 2 ==0){
        console.log(`PAR; ${numero[i]}`)
    }
    
} */

/* const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares); */
const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);