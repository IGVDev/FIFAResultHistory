import { Typography, Link } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div style={{ flex: 1 }}>
      <Typography variant="h3">Welcome to FifaResults</Typography>
      <br />
      <Link style={{ color: "white" }} href="https://github.com/IGVDev">
        <Typography variant="h5">By IGVDev</Typography>
      </Link>
      <br />
      <Typography variant="p">BOKITA PAPÁ</Typography>
    </div>
  );
};

export default Home;
