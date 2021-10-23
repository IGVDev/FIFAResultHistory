import React from "react";

const Navigation = ({
  isAdmin,
  setIsOpen,
  onRouteChange,
  isSignedIn,
  loginWithPopup,
  logout,
  user,
}) => {
  let button;
  if (isAdmin) {
    button = (
      <p
        onClick={() => onRouteChange("load")}
        className="f3 link dim white underline pa3 pointer"
      >
        Load Match
      </p>
    );
  } else if (isSignedIn) {
    button = (
      <p onClick={setIsOpen} className="f3 link dim white underline pa3">
        Admin
      </p>
    );
  } else {
    button = (
      <p
        onClick={() => loginWithPopup()}
        className="f3 link dim white underline pa3 pointer"
      >
        Sign In
      </p>
    );
  }

  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p className="f3 white pa3 absolute left-0">Hello {user.name}</p>
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
      {button}
      {isSignedIn ? (
        <p
          onClick={() => logout({ returnTo: window.location.origin })}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign Out
        </p>
      ) : null}
    </nav>
  );
};

export default Navigation;
