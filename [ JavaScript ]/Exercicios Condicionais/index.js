const nome1 = prompt("Digite o nome do primeiro carro")
const velocidade1 = prompt("Digite a velocidade do carro1")
const nome2 = prompt("Digite o nome do segundo carro")
const velocidade2 = prompt("Digite a velocidade do carro2")

if ( velocidade1 > velocidade2){
    alert(
        "O carro " + nome1 + " " + "é mais rapido!"
    )
} else if ( velocidade1 === velocidade2 ) {
    alert(
        "A velocidade dos dois são iguais"
    )
} else {
    alert(
        "O carro " + nome2 + " " + "é mais rapido!"
    )
}


const nomePersonagem = prompt("Digite o nome do personagem")
const poderAtaque = prompt("Digite o poder de ataque")


const nomePersonagem2 = prompt("Digite o nome do outro personagem") 
const quantidadeVida = prompt("Digite a quantidade de vida dele:")
const poderDefesa = prompt("Digite o poder de defesa deste personagem:")
const possuiEscudo = prompt("Ele possui escudo? (S) ou (N):")

let danoCausado

if ( poderAtaque > poderDefesa && possuiEscudo === 'N' ) {
    danoCausado = poderAtaque - poderDefesa
} else if ( poderAtaque > poderDefesa && possuiEscudo === 'S') {
    danoCausado = ( poderAtaque - poderDefesa ) / 2 
} else if ( poderAtaque <= poderDefesa ) {
    danoCausado = 0
}

console.log("Dano causado: " + danoCausado)
console.log("Vida restante: " + (quantidadeVida - danoCausado))


