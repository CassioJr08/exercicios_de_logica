import * as readline from 'readline-sync'

const pergunta: string = readline.question('Digite um ano: ');
const ano: number = parseInt(pergunta)


function olimpiadas(ano: number, f: (n: number) => string): string{
    if(ano === 1896 || ano ===  1900 || ano ===  1904 || ano ===  1906){
        return `Os jogos Olimpicos ocorream no ano ${ano}`
    }

    for(let i = 1908; i <= 2020; i +=4 ){
        if(i === ano){
            return `Os jogos Olimpicos ocorream no ano ${ano}`;
        }
    }

    return f(ano)
}
function copa(ano:number): string{
    for(let i = 1930; i <= 2022; i +=4){
        if(i === ano){
            return `Os jogos da Copa do Mundo ocorream no ano ${ano}`;
        
        }
    }

    return `Não houve jogos olimpicos nem copa do mundo neste ano ${ano}`
}

console.log(olimpiadas(ano, copa))