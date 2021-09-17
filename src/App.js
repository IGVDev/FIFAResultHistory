import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import MatchCard from "./components/MatchCard";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Standings from "./components/Standings";
import "./App.css";
import "tachyons";
import { useAuth0 } from "@auth0/auth0-react";

const initState = {
  matches: [],
  route: "home",
  isSignedIn: true,
  user: {
    id: "4",
    name: "guido",
    email: "joaco@gmail.com",
  },
};

const App = () => {
  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();
  const [state, setState] = useState({
    matches: [],
    route: "home",
    isSignedIn: isAuthenticated,
    user: {
      name: "Guest",
      email: "",
    },
  });

  const loadUser = (data) => {
    if (data) {
      setState({
        ...state,
        isSignedIn: isAuthenticated,
        user: {
          name: data.given_name,
          email: data.email,
        },
      });
    }
  };

  useEffect(() => {
    loadUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onRouteChange = (route) => {
    if (route === "signout") {
      setState(initState);
    } else if (route === "home") {
      setState({ ...state, isSignedIn: true });
    }
    setState({ ...state, route: route });
  };

  let route = state.route;
  let component;
  switch (route) {
    case "home":
      component = <Standings />;
      break;
    case "load":
      component = <MatchCard />;
      break;
    default: {
    }
  }

  return (
    <div className="App white">
      <Navigation
        isSignedIn={state.isSignedIn}
        onRouteChange={onRouteChange}
        loginWithPopup={loginWithPopup}
        logout={logout}
        loadUser={loadUser}
        username={state.user.name}
      />
      <div className="flex justify-around">{component}</div>
    </div>
  );
};

export default App;
