/*
1)Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:
a)Transformar todos os elementos em letras maiúsculas.
*/

(() => {
    let arr = ["Salvador", "Recife", "Natal", "João pessoa", "Aracaju"]
    arr = arr.map(function(arr){
        return arr.toUpperCase();
    })
    console.log(arr)
})();



/*
2)Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.
a)Chamar a função e exibir no console o retorno da função. 
*/

function numeros(){
    for(let i = 100 ; i <= 450; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
} numeros();


/*
3)Criar uma função anônima que recebe quatro strings:
a)Concatenar as strings e retornar o resultado.
b)Chamar a função e exibir no console o resultado.
*/

(function(){
    let str1 = "Bom "
    let str2 = "dia"
    let str3 = " e "
    let str4 = "a cerveja?"

    let frase = str1.concat(str1 + str2 + str3 + str4)
    console.log(frase)
})();