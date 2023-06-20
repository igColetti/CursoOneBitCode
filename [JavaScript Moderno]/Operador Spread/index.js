const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)

console.log(...towns[0])

const townsCopy = towns

console.log(townsCopy)

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({ towns, townsCopy})

const townsClone = [...towns]

townsClone.push('Akderbas')

console.log({towns, townsCopy, townsClone})

const townsObject = {
    ...towns
}

const townsObjectClone = {...townsObject}

townsObjectClone.teste = "Teste de clone"

console.log({townsObject, townsObjectClone})