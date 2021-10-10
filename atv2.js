/*
1)Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:
a)Se o número for múltiplo de 5, retornar "Bora".
b)Se o número for múltiplo de 3, retornar "Dale".
c)Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
d)Chamar a função e exibir no console o resultado.
*/

let arrow = n => {
    if(n % 5 == 0){
        console.log("Bora")
    } else if(n % 3 == 0){
        console.log("Dale")
    } else if(n % 5 == 0 && n % 3 == 0){
        console.log("JAVASCRIPT")
    }

    else {
        console.log(n+" não é multiplo de 3 nem de 5")
    }
} 
arrow(5)


/*
2)Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário.
a)Escrever o signo referente a data de aniversário de acordo com a tabela acima.
b)Chamar a função e exibir no console o resultado.
*/


var signo = (dia, mes) => {
    if (dia > 31 || dia < 1 || mes > 12 || mes < 1 || (mes === 2 && dia > 29)) {
      return console.log("Valor invalido!");
    }
    if ((dia > 20 && mes === 3) || (dia < 21 && mes === 4)) {
      return console.log("Seu signo é Áries");
    } else if ((dia > 20 && mes === 4) || (dia < 21 && mes === 5)) {

      return console.log("Seu signo é Touro");
    } else if ((dia > 20 && mes === 5) || (dia < 21 && mes === 6)) {
      
      return console.log("Seu signo é Gêmeos");
    } else if ((dia > 20 && mes === 6) || (dia < 23 && mes === 7)) {
      
      return console.log("Seu signo é Câncer");
    } else if ((dia > 22 && mes === 7) || (dia < 23 && mes === 8)) {
      
      return console.log("Seu signo é Leão");
    } else if ((dia > 24 && mes === 8) || (dia < 23 && mes === 9)) {
      
      return console.log("Seu signo é Virgem");
    } else if ((dia > 24 && mes === 9) || (dia < 23 && mes === 10)) {
      
      return console.log("Seu signo é Libra");
    } else if ((dia > 24 && mes === 10) || (dia < 22 && mes === 11)) {
      
      return console.log("Seu signo é Escorpião");
    } else if ((dia > 23 && mes === 11) || (dia < 22 && mes === 12)) {
      
      return console.log("Seu signo é Sagitário");
    } else if ((dia > 23 && mes === 12) || (dia < 20 && mes === 1)) {
      
      return console.log("Seu signo é Capricórnio");
    } else if ((dia > 21 && mes === 1) || (dia < 19 && mes === 2)) {
      
      return console.log("Seu signo é Aquário");
    } else if ((dia > 18 && mes === 2) || (dia < 21 && mes === 3)) {
      
      return console.log("Seu signo é Peixes");
    }
    return console.log("Valor invalido!");
  };
  signo(4, 1)