function contar() {

  let ini = document.getElementById('textI')
  let fim = document.getElementById('textF')
  let passo = document.getElementById('textP')
  let res = document.getElementById('resultado')
  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('Erro! Faltam dados')
    res.innerHTML = 'Impossível contar!!'
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido! Considerando passo 1')
      p = 1
    }
    if (i < f) {
      //CONTAGEM CRESCENTE
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      //CONTAGEM DECRESCENTE
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}