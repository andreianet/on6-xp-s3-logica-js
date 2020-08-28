/**2. Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e 
 * chame uma função que converta para Celsius. */

const readline = require('readline-sync')
const temp_fah = parseInt(readline.question("Digite uma temperatura: "))

function temperatura(temp_fah) {
   return (5*(temp_fah - 32) / 9).toFixed(2)     
}
temperatura(temp_fah)
console.log(`Temperatura  em Celsius:   ${temperatura(temp_fah)}`)