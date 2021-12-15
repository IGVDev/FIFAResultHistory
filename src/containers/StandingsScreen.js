import React from "react";
import Standings from "../components/Standings";

const StandingsScreen = () => {
  return (
    <div style={{ flex: 1 }}>
      <h1>Standings</h1>
      Here you can see each league's standings
      <Standings />
    </div>
  );
};

export default StandingsScreen;
