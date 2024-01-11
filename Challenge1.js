const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmud',
    players: [
        [
            'Never',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            ' Kimmich',
            'Goretzka',
            '  Coman',
            'Muller',
            ' Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            '  Witsel',
            'Hazard',
            'Brandt',
            ' Sancho',
            'Gotze'
        ],
    ],
    score: '4:01',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 234,
        tea2: 6.5,
    },
}
//1
const [players1, player2] = game.players;
console.log(players1, player2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...player2];
console.log(allPlayers);

//4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5
const {odds: {team1, x: draw, tea2}} = game;
console.log(team1, draw, tea2);

//6 
const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

//7
team1 < tea2 && console.log('Team 1 is more  likely to win');
team1 > tea2 && console.log('Tea2 is more likely to win');
