function addPlayer() {
     const position = document.getElementById('position').value 
     const name = document.getElementById('name').value 
     const number = document.getElementById('number').value 
     
     const conf = confirm("Escalar " + name + " como " + position + " ? ")

     if ( conf ) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player - ' + number
        playerItem.innerText = position + " : " + name + " ( " + number + " ) "
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player - ' + number)

    const confir = confirm ('Remover o jogador ? ' + playerToRemove.innerText + '?') 

    if ( confir ) {
      document.getElementById('teamList').removeChild(playerToRemove)
      document.getElementById('numberToRemove').value = ''  
    }
}