/**5. Crie uma função que receba um número e devolva uma soma progressiva. 
 * Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.  */

 const readline = require('readline-sync')
 let num = parseFloat(readline.question("Digite um valor: "))
 //Error: Assignment to constant variable -> significa que a variável não pode ser 'const'
 let soma = 0;
 

 function devolva(num) {     
     for (i = 1; i <= num; i++) {
         soma += i;         
     } 
     console.log("Retorne os valores: " + soma)         
 }
 devolva(num)
