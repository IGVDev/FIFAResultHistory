import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { WaveLoading } from "react-loadingg";

// import axios from "axios";

const Standings = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [database, setDatabase] = useState("");
  const databaseOptions = ["matches", "mmpdobles", "mmpfutboltenis", "mmp2021"];

  useEffect(() => {
    setIsLoading(true);
    fetch("https://peaceful-wildwood-69585.herokuapp.com/standings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ database: database }),
    })
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    // setIsLoading(false);
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
  return (
    <>
      <div
        style={{
          flex: 1,
          height: window.innerHeight - 200,
          // width: window.innerWidth - 50,
        }}
      >
        <select
          id="database"
          onChange={(event) => setDatabase(event.target.value)}
        >
          <option value="" disabled selected hidden>
            Select Database
          </option>
          {databaseOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {database === "" ? (
          <h1>(•_•)</h1>
        ) : (
          <DataTable
            progressPending={isLoading}
            progressComponent={
              <div style={{ padding: 100 }}>
                <WaveLoading size="large" />
              </div>
            }
            title="Standings"
            columns={columns}
            data={data}
            theme="dark"
            responsive
          />
        )}
      </div>
    </>
  );
};

export default Standings;
