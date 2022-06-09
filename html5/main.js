const items = [
    {
        id:0,
        nome: 'Camiseta modelo 1',
        img: 'Camiseta.png',
        preco: 35.50,
        quantidade: 0
    },
    {
        id:1,
        nome: 'Camiseta modelo 2',
        img: 'Camiseta.png',
        preco: 40.50,
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Camiseta modelo 3',
        img: 'Camiseta.png',
        preco: 42.50,
        quantidade: 0
    },
    {
        id: 3,
        nome: 'Sapato',
        img: 'Sapato.png',
        preco: 120.0,
        quantidade: 0
    },
]
incinializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML += `
        <div class="produto-single">
            <img src="`+val.img+`"<img/>
            <p>`+val.nome+`</p>
            <p>Valor: R$ `+val.preco+`</p>
            <a class= "link-carrinho"key="`+val.id+`" href="#carrinho">Adicionar ao carrinho!</a>
        </div>

        `;
    })
}
incinializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');

    containerCarrinho.innerHTML = "";

    items.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
        <div class="info-carrinho">
            <p>Produto: `+val.nome+`</p>
            <p>Qtde: `+val.quantidade+`</p>
            <p>Preço: `+val.preco+`</p>
        </div>
        `
        };
    })
}
var links = document.getElementsByTagName('a');

    for(var i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho();
            return false;
        }) 
    }

