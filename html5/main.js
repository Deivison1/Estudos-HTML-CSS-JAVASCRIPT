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
    var containerProdutos = document.getElementById('produtos');
    intems.map((val)=>{
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <p>`+val.nome+`</p>
            <img src="`+val.img+`"<img/>
            <a class="link-carrinho" key="`+val.id+`" href="#">Adicionar ao carrinho!</a>
        </div>

        `;
    })
}
incinializarLoja();

atualizarCarrinho = () => {
    console.log(intems);
}

var links = document.getElementsByTagName('link-carrinho');

for( var i = 0;  i < links.length; i++){
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        intems[key].quantidade++;
        atualizarCarrinho();
        return false;
    })

}