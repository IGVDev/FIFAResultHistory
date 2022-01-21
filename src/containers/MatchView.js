import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import WaveLoading from "react-loadingg/lib/WaveLoading";

const MatchView = (user) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [query, setQuery] = useState(user.name);
  let columns = [
    {
      name: "League",
      selector: "league",
      sortable: true,
    },
    {
      name: "Home",
      selector: "user1",
      sortable: true,
    },
    {
      name: "Team",
      selector: "team1",
      sortable: true,
    },
    {
      name: "H Score",
      selector: "result1",
      sortable: true,
    },
    {
      name: "A Score",
      selector: "result2",
      sortable: true,
    },
    {
      name: "Team",
      selector: "team2",
      sortable: true,
    },
    {
      name: "Away",
      selector: "user2",
      sortable: true,
    },
    {
      name: "Date",
      selector: "createdAt",
      sortable: true,
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    if (!query) return;
    fetch(`https://matchhistoryapi.herokuapp.com/getMatchesByUser/${query}`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [query]);

  return (
    <div style={{ flex: 1 }}>
      <input
        type="text"
        defaultValue={user.name}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <DataTable
        progressPending={isLoading}
        progressComponent={
          <div style={{ padding: 100 }}>
            <WaveLoading size="large" />
          </div>
        }
        title="User matches"
        columns={columns}
        data={data}
        theme="dark"
        responsive
      />
    </div>
  );
};

export default MatchView;
