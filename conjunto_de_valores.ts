import * as readline from 'readline-sync';

const question: string = readline.question('Digite 10 numeros: ')

const listNumbers: string[] = question.split(" ")

let MyNumbers: number[] = listNumbers.map((el: string) => parseInt(el))

for(let i = 0; i < 10 - 1 ; i++){
    let newValues: number[] = []
    for(let i = 0; i < MyNumbers.length - 1; i++){

        let result = MyNumbers[i] + MyNumbers[i + 1]
        newValues.push(result)

    }

    MyNumbers = newValues.slice()
    console.log(MyNumbers.join(" "))
}
