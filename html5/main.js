const intems = [
    {
        id:0,
        nome: 'Luvas',
        img: 'img\Luvas.png',
        quantidade: 0
    },
    {
        id:1,
        nome: 'Shorts',
        img: 'img\Shorts.png',
        quantidade: 0
    },
    {
        id: 2,
        nome: 'Sapato',
        img: 'img\Sapato.png',
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
            <a key="`+val.id+`" href="#">Adicioanr ao carinho!</a>
        </div>

        `;
    })
}
incinializarLoja();

atualizarCarinho = () => {
    console.log(intems);
}

var links = document.getElementsByTagName('a');

for( var i = 0;  i < links.length; i++){
    links[i].addEventListener('click', function(){
        let key = this.getAttribute('key');
        intems[key].quantidade++;
        atualizarCarinho();
        return false;
    })

}