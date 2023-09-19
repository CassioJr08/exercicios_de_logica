import readline from 'readline-sync'

const tempo_gasto = parseInt(readline.question("Tempo gasto da viagem em horas: "))
const velocidade_media = parseInt(readline.question("velocidade_media da viagem em km/h: "))


let multiplicando_entradas = tempo_gasto * velocidade_media

let resultado = multiplicando_entradas / 12


let numero_limitado = resultado.toFixed(3)
console.log(numero_limitado)
