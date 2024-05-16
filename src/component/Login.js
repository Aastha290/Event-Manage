import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from "../photos/img11.png";
import {auth, provider} from "./config";
import { signInWithPopup } from "firebase/auth";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");

  const navigate = useNavigate(); 

const signInWithGoogle = () => {
      signInWithPopup(auth,provider).then((data)=>{
          setEmail(data.user.email);
          localStorage.setItem("email",data.user.email)
      });
};

  useEffect(()=>{
      setEmail(localStorage.getItem('email'));
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", data.userType);
        if (data.userType === "user") {
          navigate("/home");
        } else if (data.userType === "organizer") {
          navigate("/organizer");
        }
      } else {
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred during login");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, userType }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Sign up successful!");
        setIsLogin(true);
      } else {
        setErrorMessage(data.message || "Sign up failed");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      setErrorMessage("An error occurred during sign up");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
  };


  return (
    <form onSubmit={isLogin ? handleLogin : handleSignUp}>
      <a href="#" className="logo">
        <span>Plan</span>Hub
      </a>
      <div className="login-container">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
        <button type="button" className="google-btn" onClick={signInWithGoogle}>
        <img src={googleIcon} alt="Google sign-in" />
        with Google
      </button>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="userType">User Type:</label>
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="">Select User Type</option>
              <option value="user">User</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <div className="password-requirements">
            </div>
          )}
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="btn-submit">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        <div className="toggle-form">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button type="button" onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
