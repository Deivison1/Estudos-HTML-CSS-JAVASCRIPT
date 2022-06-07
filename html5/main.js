const items = [
    {
        id:0,
        nome: 'Camiseta modelo 1',
        img: 'Camiseta.png',
        quantidade: 0
    },
    {
        id:1,
        nome: 'Camiseta modelo 2',
        img: 'Camiseta.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Camiseta modelo 3',
        img: 'Camiseta.png',
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
            <p style="float:left;">Produto: `+val.nome+`</p>
            <p style="float: right;">Quantidade: `+val.quantidade+`</p>
            <div style="clear:both"></div>
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

