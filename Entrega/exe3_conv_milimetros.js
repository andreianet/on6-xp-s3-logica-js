/**3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros. */

 const readline = require('readline-sync')
 const valor = readline.question("Digite um valor: ")

 function converte(valor) {
     return (valor * 1000).toLocaleString('pt-BR')
     
 }
 converte(valor)
 console.log(`Valor convertido em Milímetros é :   ${converte(valor)}`)
