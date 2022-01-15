import React from "react";
import whoWon from "./Match";

class MatchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      database: "test",
      leagueOptions: ["mmp2022", "mmpdobles2022", "mmpfutboltenis"],
      users: [],
      hteam: "",
      ateam: "",
      team1: "",
      team2: "",
      hscore: 0,
      ascore: 0,
      winner: "",
      needConfirm: false,
    };
  }

  componentDidMount = async () => {
    await fetch(`https://matchhistoryapi.herokuapp.com/getUsers/test`)
      .then((data) => data.json())
      .then((array) => {
        if (Array.isArray(array)) {
          this.setState({ users: array });
        }
      })
      .catch((err) => console.log(err));
  };

  onDatabaseChange = async (event) => {
    await fetch(
      `https://matchhistoryapi.herokuapp.com/getUsers/${event.target.value}`
    )
      .then((data) => data.json())
      .then((array) => {
        if (Array.isArray(array)) {
          this.setState({ users: array });
        }
      })
      .catch((err) => console.log(err));
  };

  onOptionChange = (event) => {
    if (event.target.id === "database") {
      this.onDatabaseChange(event);
    }
    this.setState({ [event.target.id]: event.target.value });
    this.setState({ needConfirm: false });
  };

  onSubmitResult = () => {
    const { hteam, ateam, team1, team2, hscore, ascore, winner, database } =
      this.state;
    if (!hteam || !ateam || !team1 || !team2 || !winner) alert("Missing data");
    else {
      fetch("https://matchhistoryapi.herokuapp.com/createMatch", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user1: hteam,
          user2: ateam,
          team1: team1,
          team2: team2,
          result1: hscore,
          result2: ascore,
          winner: winner,
          league: database,
        }),
      }).catch((err) => console.log("oops"));
      this.setState = {
        hteam: "",
        ateam: "",
        team1: "",
        team2: "",
        hscore: 0,
        ascore: 0,
        winner: "",
        needConfirm: false,
      };
      alert("Match loaded to database");
    }
  };

  onScoreVerification = () => {
    this.setState({ winner: whoWon(this.state) });
    this.setState({ needConfirm: true });
  };

  render() {
    return (
      <article className="br3 white pa3 ma2 bw1 ba shadow-5 dt dt--fixed w-auto fl center">
        <h1>Load Match</h1>
        <select id="database" onChange={this.onOptionChange}>
          {this.state.leagueOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <main className="b flex pa2">
          <div>
            <p>Player Name</p>
            <input
              type="text"
              id="hteam"
              onChange={this.onOptionChange}
            ></input>
            <select type="text" id="hteam" onChange={this.onOptionChange}>
              {this.state.users.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
              <option key="1" value="null" defaultValue>
                {" "}
              </option>
            </select>
            <p>Team</p>
            <input
              type="text"
              id="team1"
              onChange={this.onOptionChange}
            ></input>
            <p>Score</p>
            <input
              type="number"
              id="hscore"
              onChange={this.onOptionChange}
            ></input>
          </div>
          <h2 className="pa3">VS</h2>
          <div>
            <p>Player Name</p>
            <input
              type="text"
              id="ateam"
              onChange={this.onOptionChange}
            ></input>
            <select type="text" id="ateam" onChange={this.onOptionChange}>
              {this.state.users.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
              <option key="1" value="null" defaultValue>
                {" "}
              </option>
            </select>
            <p>Team</p>
            <input
              type="text"
              id="team2"
              onChange={this.onOptionChange}
            ></input>
            <p>Score</p>
            <input
              type="number"
              id="ascore"
              onChange={this.onOptionChange}
            ></input>
          </div>
        </main>
        <h2>Winner: {this.state.winner}</h2>
        {!this.state.needConfirm ? (
          <input
            className="b br3 ph3 pv2 input-reset ba b--white white bg-transparent grow pointer f6 dib"
            type="submit"
            value="Submit"
            onClick={this.onScoreVerification}
          />
        ) : (
          <input
            className="b br3 ph3 pv2 input-reset ba b--white white bg-green grow pointer f6 dib"
            type="submit"
            value="Confirm"
            onClick={this.onSubmitResult}
          />
        )}
      </article>
    );
  }
}

export default MatchCard;
