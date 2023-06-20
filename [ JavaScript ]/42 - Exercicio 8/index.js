const imoveis = []
let opcao

do {
    opcao = window.prompt(
        "Bem vindo(a) ao cadastro de imoveis!" +
        "\nTotal de Imoveis: " + imoveis.length +
        "\n\nEscolha uma opção:" +
        "\n1° Novo imovel" +
        "\n1° Lista imovel" +
        "\n1° Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = window.prompt("Informe o nome do proprietario do imovel:")
            imovel.qtdeQuartos = window.prompt("Quantos quartos possui o imovel:")
            imovel.banheiros = window.prompt("Quantos banheiros possui o imovel:")
            imovel.garagem = window.prompt("O imovel possui garagem ? ( SIM / NAO )")

            const confirmacao = confirm(
                "Salvar este imovel ?\n" +
                "\nProprietario: " + imovel.proprietario +
                "\nQuartos: " + imovel.qtdeQuartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagen: " + imovel.proprietario
            )

            if (confirmacao) {
                imoveis.push(imovel)
            }

            break
        
        case "2":
            for ( let i = 0; i < imoveis.length; i++ ) {
                alert (
                    "Imovel " + ( i + 1) +
                    "Proprietario: " + imoveis[i].proprietario +
                    "Quantidade de quartos: " + imoveis[i].qtdeQuartos +
                    "Quantidade de Banheiros: " + imoveis[i].banheiros +
                    "Possui garagem? " + imoveis[i].garagem
                )
            }
            break

        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção invaldia!")
    }

} while ( opcao !== "3")