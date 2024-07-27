//Transformar o objeto abaixo em constructor function

/*const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou')
    }
}*/

function pessoa (nomeAt, idadeAt) {
    this.nome = nomeAt
    this.idade = idadeAt
    this.andar = function () {
        return console.log(this.nome + ' andou')
    }
}

const Gloria = new pessoa('Gloria', 21)

//criar três  pessoas: joão - 20 anos; maria - 25 anos; bruno - 15 anos

const João = new pessoa('João', 20)
const Maria = new pessoa('Maria', 25)
const Bruno = new pessoa('Bruno', 15)

//criar uma constructor function (DOM) para manipulação de listas de elementos do DOM. Deve conter as seguintes propriedades e métodos:

//elements, retorna NodeList com os elementos selecionados
//addClass(classe), adiciona a todos os elementos

function dom (elemento) {
    const listaElementos = document.querySelectorAll(elemento)
    this.elements = listaElementos
    
    this.addClasse = function(classe) {
        listaElementos.forEach((element) => {
            element.classList.add(classe)
        })
    },
    this.removerClasse = function(classe) {
        listaElementos.forEach((element) => {
            element.classList.remove(classe)
        })
    }
}

const listaItens = new dom('li')
listaItens.addClasse('ativar')

//criar uma função construtora de Pessoas com nome, sobrenome  e idade
function pessoa(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

pessoa.prototype.nomeCompleto = function () {
    return this.nome + this.sobrenome
}

const gloria = new pessoa('ana gloria', 'parente', 21)
console.log(gloria)
console.log(pessoa.prototype)
