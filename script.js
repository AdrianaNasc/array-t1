console.log("Bom dia!")

// ----- Aula Array -----

let frutas = ["maçã", "banana", "kiwi", "morango", "maracujá"]
console.log(frutas[1])

//let numeros = [0, 1, 2, 3, 4, 5]

let series = ["The 100", "Love, Death & Robots", "Black Mirror", "Mr. Robot", "Kyle XY", "Warrior Nun"]
series.push("Ruptura") // Adiciona um item  no final da lista
console.log(series)

series.unshift("The Office") //Adiciona no início da lista
console.log(series)

//series.reverse()
//console.log(series)

series.shift() // Remove o primeiro item da lista
console.log(series)

series.pop() // Remove o último item da lista
console.log(series)

let umaSerie = series.slice(1, 3) // Mostra apenas os itens selecionados da lista
console.log(umaSerie)

let numeros = [3, 5, 2, 4, 6, 1, 0, 7]
numeros.sort() // Organiza os itens em ordem
console.log(numeros)
// Exemplo de array em sites: carrinho de compras do qual armazena os itens.

// Objeto
const aluno = {
    nome: "Adriana",
    idade: 26,
    profissao: "Dev",
    cpf: 88888888888
}
aluno.endereco = "Rua dos Corvos, 804"
console.log(aluno)

delete aluno.cpf
console.table(aluno) //Pode trocar console.log(aluno) por console.table(aluno)
