
let num = [5, 3, 8, 9, 1]

console.log(`${num}`)
num.push(4)
num.push(7)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`Vetor ordenado ${num}`)
console.log(`O primeiro valor do vetor ordenado é ${num[0]}`)
let pos = num.indexOf(1)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos} `)
}
