import React from "react";

const Navigation = ({
  onRouteChange,
  isSignedIn,
  loginWithPopup,
  logout,
  username,
}) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p className="f3 white pa3 absolute left-0">Hello {username}</p>
        <p
          onClick={() => onRouteChange("home")}
          className="f3 link dim white underline pa3 pointer"
        >
          Home
        </p>
        {/* <p
          onClick={() => onRouteChange("profile")}
          className="f3 link dim white underline pa3 pointer"
        >
          Profile
        </p> */}
        <p onClick={null} className="f3 dark-gray underline pa3">
          Load Match
        </p>
        <p
          onClick={() => logout({ returnTo: window.location.origin })}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("home")}
          className="f3 link dim white underline pa3 pointer"
        >
          Home
        </p>
        <p
          onClick={() => loginWithPopup()}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign In
        </p>
      </nav>
    );
  }
};

export default Navigation;
