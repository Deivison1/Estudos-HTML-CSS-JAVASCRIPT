
function criarParagrafo(){
    let para = document.createElement('p');
    para.textContent = 'você clicou no botão!';
    document.body.appendChild(para);
}

const botoes = document.querySelectorAll('button');

  for(let i = 0; i < botoes.length; i++){
      botoes[i].addEventListener('click', criarParagrafo);
  }