import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [showError, setShowError] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 8) {
      const payload = { name, email, password };
      let url = `${REACT_APP_SERVER_URL}/api/users/signup`;
      axios
        .post(url, payload)
        .then((response) => {
          console.log(response.data);
          setRedirect(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (!password === confirmPassword) {
        alert(
          "Password and Confirm Password need to match. Please try again..."
        );
      } else {
        alert(
          "Password needs to be at least 8 characters or more. Please try again..."
        );
      }
    }
  };
  const checkString = () => {
    if (password.length < 8) {
      setShowError(true);
    }
  };

  if (redirect) return <Redirect to="/login" />;

  return (
    <div className="signup-bg">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body cardBorder2">
          <h2 className="py-2 signupform-name">Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="signuplabel">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                className="form-control signup-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="signuplabel">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                className="form-control signup-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="signuplabel">
                Password
              </label>
              <div className={`error-message ${showError ? "show" : ""}`}>
                {" "}
                Password needs to be at least 8 characters or more.{" "}
              </div>

              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="form-control signup-input"
                onFocus={() => setShowError(false)}
                onBlur={() => checkString()}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="signuplabel">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                className="form-control signup-input"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary float-right signup-button"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
