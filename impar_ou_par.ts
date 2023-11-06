import * as readline from 'readline-sync'

const pergunta: string = readline.question('Digite um numero: ')
const lista: string[]  = [...pergunta]

const num: number = parseInt(pergunta)

const newList: number[] = lista.map((el: string)=> parseInt(el))

if(num % 2 === 0){
    console.log(`${num} é par`)
}else{
    console.log(`${num} é ímpar`)
}


const reduzir: number = newList.reduce((acc, el) => acc += el)

console.log(`A soma dos algarismos ${num} é ${reduzir}`)
