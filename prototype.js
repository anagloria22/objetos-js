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