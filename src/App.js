import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "tachyons";
import "./App.css";
import "react-responsive-modal/styles.css";

import Home from "./containers/Home";
import Navigation from "./components/Navigation";
import MatchUpload from "./containers/MatchUpload";
import StandingsScreen from "./containers/StandingsScreen";
import AdminSignIn from "./components/AdminSignIn";
import MatchView from "./containers/MatchView";
import AdminPanel from "./containers/AdminPanel";
import { Container, Fab } from "@mui/material";

const App = () => {
  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();

  const [isSignedIn, setIsSignedIn] = useState(false); // for debugging set to true
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // for debugging set to true
  const [isOpen, setIsOpen] = useState(false);
  const [route, setRoute] = useState("home");
  const [name, setName] = useState("Guest");
  const [pw, setpw] = useState("");
  // Commented email because it's not being used at the moment
  // const [email, setEmail] = useState("");

  const loadUser = (data) => {
    if (data) {
      setIsSignedIn(isAuthenticated);
      setName(data.given_name);
      // setEmail(data.email);
    }
  };

  useEffect(() => {
    loadUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onRouteChange = (route) => {
    setRoute(route);
  };

  let component;
  switch (route) {
    case "home":
      component = <Home />;
      break;
    case "load":
      component = <MatchUpload />;
      break;
    case "profile":
      component = <MatchView name={name} />;
      break;
    case "standings":
      component = <StandingsScreen />;
      break;
    case "admin":
      component = <AdminPanel />;
      break;
    default: {
    }
  }

  return (
    <div className="App white">
      <Navigation
        isSignedIn={isSignedIn}
        isAdmin={isAdmin}
        setIsOpen={setIsOpen}
        onRouteChange={onRouteChange}
        loginWithPopup={loginWithPopup}
        logout={logout}
        loadUser={loadUser}
        name={name}
      />
      <Container style={{ backgroundColor: "red" }}>
        <AdminSignIn
          isOpen={isOpen}
          isLoading={isLoading}
          setpw={setpw}
          setIsLoading={setIsLoading}
          pw={pw}
          setIsAdmin={setIsAdmin}
          setIsOpen={setIsOpen}
        />
        {component}
      </Container>
    </div>
  );
};

export default App;
