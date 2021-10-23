//This function needs to set the new object's property to a string before
//passing it to the Card component, or React won't render it.
//Remember you won't be working with an array, but rather with a database
//so you'll have to convert it to string before putting it into the database.

const whoWon = (match) => {
  if (match.hscore > match.ascore) return match.hteam;
  else if (match.ascore > match.hscore) return match.ateam;
  else return "tie";
};

export default whoWon;
