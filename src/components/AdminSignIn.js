import React from "react";
import WaveLoading from "react-loadingg/lib/WaveLoading";
import Modal from "react-responsive-modal";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

const AdminSignIn = ({
  isOpen,
  setIsLoading,
  isLoading,
  setpw,
  pw,
  email,
  setIsAdmin,
  setIsOpen,
}) => {
  const onCloseModal = () => setIsOpen(false);
  const submitPassword = async () => {
    setIsLoading(true);
    const hashPassword = bcrypt.hashSync(pw, salt);
    await fetch("https://matchhistoryapi.herokuapp.com/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: email, hash: hashPassword }),
    })
      .then((data) => {
        if (data.status === 200) {
          setIsAdmin(true);
          setIsOpen(false);
        }
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitPassword();
    }
  };

  return (
    <div>
      <Modal open={isOpen} onClose={onCloseModal} center>
        {isLoading ? (
          <div style={{ padding: 100 }}>
            <WaveLoading size="large" />
          </div>
        ) : (
          <div>
            <h2>Password:</h2>
            <input
              type="password"
              onChange={(event) => setpw(event.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={submitPassword}>Login</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminSignIn;
