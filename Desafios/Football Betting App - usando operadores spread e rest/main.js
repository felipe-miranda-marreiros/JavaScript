//Your tasks:

/*
1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Davies", "Muller", "Lewandowski", "Kimmich"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  scores: {},
  printGoals: function (...x) {
    console.log(`The total scored is ${game.score}`);
  },
  isWinner: function () {
    let result = game.odds.team1 || game.odds.team2;
    let p = console.log(result);
    return p;
  },
  playersScored: function () {
    for (const [i, player] of this.scored.entries()) {
      console.log(`Goal ${i + 1}: ${player}`);
    }
  },
  averageOdd: function () {
    const values = Object.values(this.odds);
    let average = 0;
    for (const oddValues of values) {
      average += oddValues;
    }
    average /= values.length;
    console.log(average);
  },
  showOdds: function () {
    for (const [team, odd] of Object.entries(this.odds)) {
      const teamStr = team === "x" ? "draw" : `victory ${this[team]}`;
      console.log(`Odd of ${teamStr} ${odd}`);
    }
  },
};

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, draw, team2 } = game.odds;

game.printGoals(...game.scored);
game.isWinner();

/////////////////////////////////
game.playersScored();
game.averageOdd();
game.showOdds();

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

//transformando Map em Set(com valores únicos) e colocando em uma array;
const events = [...new Set(gameEvents.values())];

//deletando um elemento do Map
gameEvents.delete(64);

//Pop tirou o último elemento da Array Time;
const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "First" : "Second";
  console.log(`[${half}Half] ${min}: ${event}`);
}
