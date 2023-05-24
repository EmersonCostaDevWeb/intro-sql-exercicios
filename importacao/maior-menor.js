// Faça um programa que receba a quantidade de números e seus respectivos valores. 
// Imprima o maior e o menor número deste conjunto.
const numeroArray = []
for (let i = 0; i < 10; i++) {
    let numero = Math.floor(Math.random() * 100)
    numeroArray.push(numero)
}
 
const MaiorMenor = function (numero) {
    let maior=0;
    let menor=0;
    if (numero>maior) {
        maior = numero;
        menor = maior;
    }
    if (numero > maior){
        maior = numero;
    }     
    if (numero < menor){
        menor = numero;
        
    }
    return menor, maior;
}
for (let i = 0; i < numeroArray.length; i++) {
   console.log(MaiorMenor(numeroArray[i]))
}


   
