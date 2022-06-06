const intems = [
    {
        id:0,
        nome: 'Luvas',
        img: 'Luvas.png',
        quantidade: 0
    },
    {
        id:1,
        nome: 'Shorts',
        img: 'Shorts.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Sapato',
        img: 'Sapato.png',
        quantidade: 0
    },
]
incinializarLoja = () => {
    var containerProdutos = document.getElementById('pordutos');
    intems.map((val)=>{
        containerProdutos.innerHTML+= `
        <div class="produto-single">
            <img src="`+val.img+`"<img/>
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="">Adicioanr ao carinho!</a>
        </div>

        `;
    })
}
incinializarLoja();