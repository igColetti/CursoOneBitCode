const vagas = []
let opcao

do {
    opcao = window.prompt(
        "Bem vindo(a) ao Menu!" +
        "\n1° Listar vagas disponiveis" +
        "\n2° Criar uma nova vaga" +
        "\n3° Visualizar uma vaga" +
        "\n4° Inscrever um candidato em uma vaga" +
        "\n5° Excluir uma vaga" +
        "\n0° Sair"
    )

    switch(opcao) {
        case "1": // Listar vagas disponiveis e o total de candidatos
            for (let i = 0; i < vagas.length; i++) {
                const vaga = vagas[i];
                alert("\nIndice da vaga: " + i +
                      "\nNome da vaga: " + vaga.nome +
                      "\nDescrição da vaga: " + vaga.descricao +
                      "\nQuantidade de candidatos: " + vaga.candidatos.length
                )
            }
            break

        case "2": // Criar uma nova vaga

            const vaga = {}

            vaga.nome = window.prompt("Digite o nome para a vaga: ")
            vaga.descricao = window.prompt("Digite uma descrição para a vaga: ")
            vaga.dataLimite = window.prompt("Digite uma data limite para se candidatar: ")
            vaga.candidatos = []


            const confirmacao = confirm(
                "Salvar esta vaga ?\n" +
                "\nNome da vaga: " + vaga.nome +
                "\nDescrição: " + vaga.descricao +
                "\nData limite de inscrição: " + vaga.dataLimite 
            )

            if (confirmacao) {
                vagas.push(vaga)
            }

            break

        case "3": // Mostrar todas as informações da vaga selecionada
            const indiceVaga = Number(prompt("Digite o indice da vaga que deseja visualizar: "))

            alert("\nInformações da vaga selecionada:" +
                  "\nIndice da vaga: " + indiceVaga +
                  "\nNome:" + vagas[indiceVaga].nome +
                  "\nDescrição: " + vagas[indiceVaga].descricao +
                  "\nData Limite: " + vagas[indiceVaga].dataLimite +
                  "\nQuantidade de candidatos: " + vagas[indiceVaga].candidatos.length +
                  "\nCandidatos :" + vagas[indiceVaga].candidatos
            )
            break

        case "4":// Inscriver candidato na vaga
            const candidato = {}

            candidato.nome = window.prompt("Digite o seu nome:")
            candidato.indiceVaga = Number(window.prompt("Digite o indice da vaga que deseja se cadastrar"))

            const confirmacao2 = confirm(
                "\nDeseja se candidatar a esta vaga ?" +
                "\nNome da vaga: " + vagas[candidato.indiceVaga].nome +
                "\nDescrição: " + vagas[candidato.indiceVaga].descricao +
                "\nQuantidade de candidatos: " + vagas[candidato.indiceVaga].candidatos.length
            )

            if ( confirmacao2 ) {
                vagas[candidato.indiceVaga].candidatos.push(candidato)
            }

            break

        case "5":
            const numeroIndice = Number(prompt("Digite o numero do indice da vaga que deseja excluir"))
            
            const excluirVaga = confirm(
                "\nDeseja realmente excluir esta vaga ?" +
                "\nNome: " + vagas[numeroIndice].nome +
                "\nDescrição: " + vagas[numeroIndice].descricao
            )

            if ( excluirVaga ) {
                vagas.splice(numeroIndice,1)
            }
            break


        case "0":
            alert("Finalizando...")
            break

        default:
            break

    }


} while(opcao != 0 )
