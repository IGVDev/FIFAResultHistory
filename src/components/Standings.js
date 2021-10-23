import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import axios from "axios";

const Standings = () => {
  const [data, setData] = useState([]);
  const [database, setDatabase] = useState("matches");
  const databaseOptions = ["matches", "mmpdobles", "mmpfutboltenis"];

  useEffect(() => {
    fetch("https://peaceful-wildwood-69585.herokuapp.com/standings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ database: database }),
    })
      .then((data) => data.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, [database]);

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Points",
      selector: "points",
      sortable: true,
      right: true,
    },
    {
      name: "P",
      selector: "gamesPlayed",
      sortable: true,
      right: true,
    },
    {
      name: "W",
      selector: "gamesWon",
      sortable: true,
      right: true,
    },
    {
      name: "D",
      selector: "gamesTied",
      sortable: true,
      right: true,
    },
    {
      name: "L",
      selector: "gamesLost",
      sortable: true,
      right: true,
    },
    {
      name: "%",
      selector: "winpercent",
      sortable: true,
      right: true,
    },
    {
      name: "GF",
      selector: "goalsFor",
      sortable: true,
      right: true,
    },
    {
      name: "GA",
      selector: "goalsAgainst",
      sortable: true,
      right: true,
    },
    {
      name: "GD",
      selector: "goalDif",
      sortable: true,
      right: true,
    },
  ];
  console.log(data);
  return (
    <>
      <div style={{ flex: 1 }}>
        <div>
          <select
            id="database"
            onChange={(event) => setDatabase(event.target.value)}
          >
            {databaseOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <DataTable
          title="Standings"
          columns={columns}
          data={data}
          theme="dark"
        />
      </div>
    </>
  );
};

export default Standings;
