const listaDeCompras = []
console.log(listaDeCompras)

listaDeCompras[0] = 'Arroz'
listaDeCompras[1] = 'Feijão'
listaDeCompras[2] = 'Carne'
console.log(listaDeCompras)



// Adicionar Elementos

const arr = ["Frodo", "Sam", "Merry", "Pippin"]
console.log('')
console.log('')
console.log('')
console.log(arr)


//push ( adiciona ao final) e retorna tbm o tamanho do array

arr.push("Igor")
arr.push("Coletti")

console.log(arr)


//unshift ( adiciona ao começo ) e retorna tbm o tamanho do array

arr.unshift("Primeiro")
console.log(arr)


// remover elementos

// pop ( remove o ultimo elemento do array e retorna ele)

arr.pop()
console.log(arr)

// shift ( remove o primeiro elemento )

arr.shift()
console.log(arr)


// PESQUISAR POR UM ELEMENTO
console.log('')
console.log('')
console.log('')

// includes ( pesquisa pelo valor exato)

const inclui = arr.includes("Igfor")
console.log(inclui)

// indexOf ( pesquisa o index e retorna ele)

const indice = arr.indexOf("Igor")
console.log(indice)

// cortar e concatenar 
// slice ( cortar )

const hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
console.log(hobbits)

//concat ( concatena dois arrays)

const sociedade = hobbits.concat(outros, "Pode adiconar quantos quiser","Sem limites",131,1232)
console.log(sociedade)

// substituição dos elementos
// splice ( remover um grupo de elementos e substituir)
const elementosRemovidos = sociedade.splice(indice,1,'Substitui Aqui') 
console.log(elementosRemovidos)
console.log(sociedade)


// Iterar sobre os elementos

for ( let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " Se encontra na posição" + indice)
}