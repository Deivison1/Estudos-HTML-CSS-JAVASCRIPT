const intems = [
    {
        id:0,
        nome: 'Luvas',
        img: '',
        quantidade: 0
    },
    {
        id:1,
        nome: 'Shorts',
        img: '',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Sapato',
        img: '',
        quantidade: 0
    },
]
 inicilizarLOja = () => {
     var containerProduto = document.getElementById('produtos');
     intems.map((val) =>{
        containerProduto.innerHTML += `
        
        <div class="produtos-single">
        < img = src="`+val.img+`" /> 
        </div>`
    })
}
inicilizarLOja();