
let valores = [5,6 ,7 ,7 ,8 ,9 ,10, 13]

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
console.log(valores[7])

for(let pos = 0; pos <= valores.length; pos++)
console.log(`A posição do vetor é ${pos} tem o valor ${valores[pos]}`)
*/

for(let pos in valores)
console.log(`A posição é ${pos} tem o valor ${valores[pos]}`)
valores.sort()