const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]


  // MAP ( SERVE PARA FAZER TRANSFORMAÇÃO EM ARRAYS ( CRIA OUTRO ARRAY) )


  //const nomes = []

  //for ( let i = 0; i < personagens.length; i++ ) {
    //nomes.push(personagens[i].nome)
  //}

 // console.log(nomes)

 const nomes =  personagens.map(function (personagem) {
    return personagem.nome
 })

 console.log(nomes)

 // Filter ( Filtra elementos e cria um novo elemento)

 //const orcs = []

 //for (let i = 0; i < personagens.length; i++) {
    //if ( personagens[i].raca === "Orc" ) {
        //orcs.push(personagens[i])
    //}  
 //}

 //console.log(orcs)

 const orcs = personagens.filter( function (personagem) {
    return personagem.raca === "Orc" 
 })

 console.log(orcs)


 // REDUCE ( Cria novo array e transforma array em outro valor )

 // 1 -> 2 - > 3 -> 4 ( vai armazenando os valores na sequencia)

 const nivelTotal = personagens.reduce( function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
 },0) // o zero é o valor inicial


 const racas = personagens.reduce( function (valorAcumulado, personagem) {
   
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado

 }, {}) // irá começar como um objeto vazio

 console.log(racas)


 // Sort ( Utilizado para ordenar Arrays ( ele altera o proprio array sem criar outro ) )

 // 1 , 5 , 8 , 4 ( vai de dois em dois ordenando )
 const personagensOrdenados = personagens.slice().sort( function (a, b) {
    return a.nivel - b.nivel
 }) // compara se o nivel de A é maior que o de B ( retorna positivos se for verdadeiro )

 console.log(personagens)
 console.log(personagensOrdenados)

