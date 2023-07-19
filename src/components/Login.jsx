import React, { useEffect, useState } from "react";
import dog_img from "../assets/login.jpg";
// import bgc from "../assets/bgc.jpg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const localEmail = localStorage.getItem("@EMAIL");
    const localPassword = localStorage.getItem("@PASSWORD");

    console.log("EMAIL", localEmail);
    if (localEmail !== null) {
      // console.log("RAHUL", localEmail);
      navigate("/dashboard");
    }
  }, [email, password]);

  const login = () => {
    if (email === "" || password === "") {
      toast.error("EMAIL or PASSWORD can't be empty.");
    } else if (email === "admin@admin.com" && password === "admin123") {
      localStorage.setItem("@EMAIL", email);
      localStorage.setItem("@PASSWORD", password);
      toast.success('Login Successful')
      navigate("/dashboard");
    } else {
      toast.error("Enter correct credentials.");
    }
  };

  const guestLogin = () => {
    localStorage.setItem("@EMAIL", "admin@admin.com");
    localStorage.setItem("@PASSWORD", "admin123");
    setEmail("admin@admin.com");
    setPassword("admin123");
    toast.success('Login Successful')
    navigate("/dashboard");
  };

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    <div className="login-page">
      <div className="login-wrapper">
        <div className="image-wrapper">
          <img src={dog_img} alt="dog image" />
        </div>
        <div className="login-container">
          <h1>Dashboard Login</h1>
          <div className="input-div">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
            <button onClick={guestLogin}>Login as Guest</button>
            <div style={{textAlign:'left', marginTop:10}}>
            <p>Email- admin@admin.com</p>
            <p>Password- admin123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
