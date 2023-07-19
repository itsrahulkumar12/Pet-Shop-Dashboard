import React, { useEffect, useState } from "react";
// import logo from '../assets/images/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(false);

  useEffect(() => {
    const localEmail = localStorage.getItem("@EMAIL");
    if (localEmail !== null) {
      setEmail(true);
    }
  }, []);

  return (
    <>
      <nav>
        <div style={{ cursor: "pointer" }}>
          <h1 class="logo">
            <span
              style={{
                backgroundColor: "#DC2265",
                color: "#fff",
                padding: 6,
                paddingLeft: 10,
              }}
            >
              PET
            </span>{" "}
            SHOP
          </h1>
        </div>
        <div>
          {email ? (
            <h5 onClick={() => navigate("/dashboard")} className="login-btn">
              Dashboard
            </h5>
          ) : (
            <h5 onClick={() => navigate("/login")} className="login-btn">
              Login
            </h5>
          )}
        </div>
      </nav>
      {/* <hr /> */}
    </>
  );
};

export default Navbar;
