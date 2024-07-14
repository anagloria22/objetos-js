/*const carro = {
    marca: 'Marca',
    preço: 1000
}

const honda = carro
honda.marca = 'Honda'
honda.preço = 2000

const fiat = carro
fiat.marca = 'Fiat'
fiat.preço = 3000

para criarmos um objeto com as mesmas características do anterior é melhor usarmos as constructor functions, elas são responsáveis por construir novos objetos sempre que a chamamos*/

//podemos passar argumentos que serão usados no momento da criação do objeto
function carro (marcaAtribuida, precoAtribuido) { 
    this.marca = marcaAtribuida
    this.preco = precoAtribuido
}

const honda = new carro('Honda', 3000) //o new copia o objeto baseado na função construtora
const fiat = new carro('Fiat', 4000)

function carro2 (marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.preco = precoFinal
}

const toyota = new carro2('Toyota', 5000)

//this Keyword
//o this se refere ao próprio objeto construído com a construction function
