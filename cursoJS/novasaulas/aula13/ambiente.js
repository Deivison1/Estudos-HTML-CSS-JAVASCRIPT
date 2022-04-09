/*Repetições em Javascript

Estrutura de repetição com while:
teste lógico no inicio*/

var c = 1 
while( c <= 6) // Teste lógico no inicio
{
    console.log(`passo ${c}`)
    c++ // c = c + 1
}

/*Estrutura de repetição com (do while):
  primeiro ele executa o bloco depois 
  verifica se a condição é verdadeira */

var c = 1 
do{ 
    console.log(`passo ${c}`)
    c++
}while(c <= 6) // Teste lógico no final
