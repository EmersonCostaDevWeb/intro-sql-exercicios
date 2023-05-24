// Faça um programa que receba a quantidade de números e seus respectivos valores.
// Imprima todos os números pares.
let numeroArray =[]
let numerospares=[]
for (let i = 0; i < 10; i++) {
    const numero = Math.floor(Math.random() * 100)
    numeroArray.push(numero)
   
}
console.log(numeroArray);
const numeropar = function(number){
    if(number %2 ==0){
        numerospares.push(number)
        console.log(number);
    }
}
for (let i = 0; i < numeroArray.length; i++) {
     numeropar(numeroArray[i])
    
}

console.log(`Numero do array: ${numeroArray}`)
 console.log(`Numero pares: ${numerospares}`)