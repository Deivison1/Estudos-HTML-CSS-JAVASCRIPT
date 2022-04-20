function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('textano')
  var resultado = document.querySelector('div#resultado')

if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('verifique novamente')

}else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
    genero = 'Homem'
    if(idade >= 0 && idade < 10){
       //Criança
    img.setAttribute('src', 'foto-bebe-m.png')

    }else if(idade < 21){
      //Jovem
    img.setAttribute('src', 'jovem-m.png')

    }else if(idade < 50){
      //Adulto
    img.setAttribute('src', 'foto-adulto-m.png')

    } else{
     //Idoso
    img.setAttribute('src', 'foto-idoso-m.png')
    }

    }else if(fsex[1].checked){
    genero = 'Mulher'
    if(idade >= 0 && idade < 10){
     //Criança
    img.setAttribute('src', 'foto-bebe-f.png')

    }else if(idade < 21){
    //Jovem
    img.setAttribute('src', 'foto-jovem-f.png')

    }else if(idade < 50){
    //Adulta
    img.setAttribute('src', 'foto-adulto-f.png')

    } else{
           //Idosa
    img.setAttribute('src', 'foto-idoso-f.png')
        }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML =`Detectamos ${genero} com ${idade} anos`
    resultado.appendChild(img)
    }
    
}
