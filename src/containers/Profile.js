import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import WaveLoading from "react-loadingg/lib/WaveLoading";

const MatchView = (user) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  let columns = [];
  const API_URL = `https://matchhistoryapp.fly.dev`;

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/getMatches/`)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default MatchView;
