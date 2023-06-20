
//FILA DE PACIENTES
let opcao
const pacientes = []

do {
    opcao = window.prompt(
        "\n===============" +
        "\n1° Novo paciente" +
        "\n2° Consultar Paciente" +
        "\n3° Mostrar Fila" +
        "\n0° Sair" +
        "\n==============="
    )

    switch (opcao) {
        case '1':
            nome = window.prompt("Digite o nome do paciente: ")
            pacientes.push(nome)
            break
        case '2':
            pacientes.shift()
            break
        case '3':
            alert(pacientes)
            break
        case '0':
            window.alert("Programa encerrado!")
            break
        default:
            break

    }

} while ( opcao != 0)


// PILHA DE CARTAS
let opcao2
const cartas = []

do {
    opcao = window.prompt(
        "\n===============" +
        "\n1° Adiconar uma Carta" +
        "\n2° Puxar uma carta" +
        "\n0° Sair" +
        "\n==============="
    )

    switch (opcao2) {
        case '1':
            nome = window.prompt("Digite o nome do paciente: ")
            pacientes.push(nome)
            break
        case '2':
            pacientes.shift()
            break
        case '0':
            window.alert("Programa encerrado!")
            break
        default:
            break

    }

} while ( opcao2 != 0)


