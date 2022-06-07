const intems = [
    {
        id:0,
        nome: 'Camiseta 1',
        img: 'Camiseta.png',
        quantidade: 0
    },
    {
        id:1,
        nome: 'Camiseta 2',
        img: 'Camiseta.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Camiseta 3',
        img: 'Camiseta.png',
        quantidade: 0
    },
]
incinializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    intems.map((val)=>{
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

    intems.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML += `
        <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
        <hr>

        `;
        }
    })
}
var links = document.getElementsByTagName('a');
    for(var i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(){
            let key = this.getAttribute('key');
            intems[key].quantidade++;
            atualizarCarrinho();
            return false;
        })  
    }

