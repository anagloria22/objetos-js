const comida = 'pizza'
const água = new String('Água')
const frase = 'A melhor comida é '

console.log(frase.repeat(5)) //repete a string n vezes

console.log(água.length)
console.log(frase[frase.length - 1])
console.log(frase.charAt(frase.length)) //charAt mostra o caractere no index tal

const fraseFinal = frase.concat(comida, "!") //concat junta as strings

const fruta = 'Banana'
const listaFrutas = 'Menlancia, Banana, Laranja'

console.log(listaFrutas.includes(fruta, 5)) //includes retorna verdadeiro quando o valor de uma string procurado em outra é encontrado. O index serve para indicar a partir de qual caractere eu quero que ele procure. Caso não encontre, retorna falso

console.log(fruta.endsWith('na')) //retrona verdadeiro ou falso se a string começar ou terminar exatamento igual o que escrevemos entre (). É case sensitive.

console.log(frase.slice(0, 3)) //corta a string de acordo com os valores de start e end
console.log(frase.substring(3 ,5)) //é como o slice, mas não funciona com valores negativos

const instrumento = 'Guitarra'
console.log(instrumento.indexOf('r')) //vai retornar o index da string
console.log(instrumento.lastIndexOf('ta')) //retorna o pultimo resultado

const listaPrecos = ['R$99', 'R$199', 'R$12000']

listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '.'))
})

listaPrecos[0].padStart(10, '.')
listaPrecos[0].padEnd(10, '.') //aumenta o tamanho da string para o valor de n. O preenchimento é feito com espaços, caso o segunda argumento não tenha sido declarado.
