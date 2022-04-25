let amigo = {nome: 'Deivison', idade: 25, 
sexo: 'M',
peso:80, 
engordar(p=0){
    console.log('engordar')
    this.peso += p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg` )
