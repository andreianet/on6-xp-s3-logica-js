/**4. Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro" */

const readline = require('readline-sync')
let num1 = parseFloat(readline.question('Insira o primeiro numero: '))
let num2 = parseFloat(readline.question('Insira o segundo numero: '))
let num3 = parseFloat(readline.question('Insira o terceiro numero: '))

function valor(num1,num2,num3) {
	if(!num1 && !num2 && !num3  ) {			
		return "Não recebeu parâmetro"; 
	}
    else if(num1 && num2 && num3 ) {		
		let som_div = (num1 + num2)/num32
		
		return som_div 
	} 
	else if(num1 && num2 && num3 ){		
		return num1;
	}
	else if(!num1 && !num2 && !num3){			
		return num2;
	}
	else if (!num1 && !num2 && !num3){
		return num3
	}
	else{
		let calc = 0
		if (num1 && num2) {
			calc = num1 + num2
		}else if (num1 && num3) {
			calc = num1 + num3
		}else{
			calc = num2 + num3
		}
		return calc
	}
	     
}
valor()

