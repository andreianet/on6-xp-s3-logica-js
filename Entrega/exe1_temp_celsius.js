/**1. Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit.
 *  F = 9*C/5 + 32 */

 const readline = require('readline-sync')
 const temp_celsius = parseInt(readline.question("Digite uma temperatura: "))

 function temperatura(temp_celsius) {
    return  (9 * temp_celsius) / 5 + 32
         
 } 
 temperatura(temp_celsius)
 console.log(`Temperatura  em Fahrenheit:   ${temperatura(temp_celsius)}`)
 

