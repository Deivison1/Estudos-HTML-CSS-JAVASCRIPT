
function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = ` Agora são ${hora} horas`
if(hora >= 0 && hora < 12 ){
    //Bom dia!!
    img.scr = 'fotomanha.png'
    document.body.style.background = 'rgb(252, 235, 179)'

}else if(hora >= 12 && hora < 18){
    //Boa tarde!!
    img.src = 'fototarde.png'
    document.body.style.background = 'rgb(236, 165, 35)' 

}else{
    //Boa noite!!
    img.src = 'fotonoite.png'
    document.body.style.background = 'rgba(42, 29, 5, 0.476)'
}
}
