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
           img.setAttribute('src', 'menino.png')

        }else if(idade < 21){
           //Jovem
           img.setAttribute('src', 'homem-jovem.png')

        }else if(idade < 50){
          //Adulto
           img.setAttribute('src', 'homem-adulto.png')

        } else{
          //Idoso
          img.setAttribute('src', 'homem-idoso.png')
        }
    } else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'menina.png')

         }else if(idade < 21){
            //Jovem
            img.setAttribute('src', 'mulher-jovem.png')

         }else if(idade < 50){
           //Adulto
           img.setAttribute('src', 'mulher-adulta.png')

         } else{
           //Idoso
           img.setAttribute('src', 'idosa.png')
         }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML =`Detectamos ${genero} com ${idade} anos`
    resultado.appendChild(img)
    }
    
}
