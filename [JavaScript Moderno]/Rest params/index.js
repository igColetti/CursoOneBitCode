function sum(parametro1,...numbers) { // ele sempre deverá ser definido como o ultimo parametro
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1,1))
console.log(sum(2,4,5,6,7.57,8,9,0,3,3,5,6,88,34,234,24,242,42,342,5,64,6))