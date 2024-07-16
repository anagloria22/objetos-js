//prototype é um objeto adicionado a uma função quando a mesma é criada
function pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

pessoa.prototype.andar = function () {
    return this.nome + ' andou'
}

const robson = new pessoa('robson', 22)

console.log(pessoa.prototype)
console.log(robson.prototype)

//funcao.protoype
//podemos adicionar novas propriedades e métodos ao objeto prototype
//primeiro a verificação é feita no objeto e depois é que vai pro prototipo caso nao tenha no objeto

const país = 'Brasil'
const cidade = new String('Sobral')

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo']

const listaArray1 = Array.prototype.slice.call(lista) //está linkado ao prototipo
const listaArray2 = Array.from(lista) //é uma forma mais rápida e está linkada direto com a função array

Object.getOwnPropertyNames(Array) //vai retornar uma lista com os métodos/propriedades
//dado.constructor.name retorna o nome do construtor