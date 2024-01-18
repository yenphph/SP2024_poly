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
        x: 3.25,
        tea2: 6.5,
    },
}
//1
for(const [i, player] of game.scored.entries())
console.log(`Goal ${i + 1} : ${player}`);

//2
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Old of ${teamStr} ${odd}`);
}