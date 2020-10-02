//This function needs to set the new object's property to a string before 
//passing it to the Card component, or React won't render it.
//Remember you won't be working with an array, but rather with a database
//so you'll have to convert it to string before putting it into the database.

const whoWon = (match) => {
   if (match.hscore > match.ascore) return match.hteam
   else if (match.ascore > match.hscore) return match.ateam
   else return 'tie'
}

export var matches = [{
   player1: 'Guido',
   player2: 'Laucha',
   team1: 'Liverpool',
   team2: 'Manchester United',
   team1result: 2,
   team2result: 0,
   winner: 'Guido',
 },
 {
   player1: 'Imanol',
   player2: 'Laucha',
   team1: 'Boca',
   team2: 'Racing',
   team1result: 0,
   team2result: 2,
   winner: 'Laucha'
}]



export default whoWon;
