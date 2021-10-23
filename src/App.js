import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import bcrypt from "bcryptjs";
import MatchCard from "./components/MatchCard";
import Navigation from "./components/Navigation";
import Standings from "./components/Standings";
import { Modal } from "react-responsive-modal";
// import Profile from "./components/Profile";
import "tachyons";
import "./App.css";
import "react-responsive-modal/styles.css";

const salt = bcrypt.genSaltSync(10);

const initState = {
  matches: [],
  route: "home",
  isSignedIn: false,
  user: {
    name: "Guest",
    email: "",
  },
};

const App = () => {
  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();

  const [state, setState] = useState(initState);
  const [isOpen, setIsOpen] = useState(false);
  const [pw, setpw] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

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

  const onCloseModal = () => setIsOpen(false);

  // const fetchLeagues = async () => {
  //   await fetch("https://peaceful-wildwood-69585.herokuapp.com/leagues")
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // };

  const submitPassword = async () => {
    const hashPassword = bcrypt.hashSync(pw, salt);
    await fetch("https://peaceful-wildwood-69585.herokuapp.com/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: state.user.email, password: hashPassword }),
    })
      .then((data) => {
        if (data.status === 200) setIsAdmin(true);
        setIsOpen(false);
      })
      .catch((err) => console.log(err));
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
        isAdmin={isAdmin}
        setIsOpen={setIsOpen}
        onRouteChange={onRouteChange}
        loginWithPopup={loginWithPopup}
        logout={logout}
        loadUser={loadUser}
        user={state.user}
      />
      <div className="flex">
        <Modal open={isOpen} onClose={onCloseModal} center>
          <h2>Password:</h2>
          <input
            type="password"
            onChange={(event) => setpw(event.target.value)}
          />
          <button onClick={submitPassword}>Login</button>
        </Modal>
        {component}
      </div>
    </div>
  );
};

export default App;
