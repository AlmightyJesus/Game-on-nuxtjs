const gGames = [
    {
        _id: '101',
        name: 'chess',
        img: 'chess.png',
        rules:'Kill the king, Take his crown.'

    },
    {
        _id: '102',
        name: 'reversi',
        img: 'reversi.png',
        rules:'Trap your enemy in the corner. Oh , actually - You should take the corners.'
    },
]

function getGames() {
    return gGames
}

function getGameByName(gameName) {
    return gGames.find(game => game.name === gameName)
}

export default {
    getGames,
    getGameByName,
}