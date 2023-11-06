function separar_valores(variavel: string): Array<number>{
    const listNumbers: string[] = variavel.split(" ")
    let MyNumbers: number[] = listNumbers.map((el: string) => parseInt(el))
    return MyNumbers
}

function matematica<T extends number, U extends string>(a: T, b: T, c: U): number{
    if(c === 'soma'){
        return a + b
    }

    if(c === 'sub'){
        return a - b
    }

    if(c === 'mult'){
        return a * b
    }

    return 0
}


import * as readline from "readline-sync";

const question: string = readline.question('Digite 16 numeros: ')
const question2: string = readline.question('Digite 16 numeros: ')
const question3: string = readline.question('Digite o operador: ')

const resultOne: number[] = separar_valores(question)
const resultTwo: number[] = separar_valores(question2)

//console.log(resultOne); console.log(resultTwo)
let list: number[] = []
for(let i = 0; i < 16; i++){

    let result = matematica(resultOne[i],resultTwo[i], question3)
    list.push(result)

    if(list.length == 4){
        console.log(list.join(" "))
        list = []
    }

}

