// Imports
import React, { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { Redirect, Link } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const SearchState = (props) => {
  const [stateSearch, setStateSearch] = useState("");

  const handleStateSearch = (e) => {
    setStateSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `${REACT_APP_SERVER_URL}/api/search/states/US-${stateSearch}`;
    console.log(stateSearch);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.birds);
        const birdArray = response.data.birds;
        console.log(birdArray);
        for (let i = 0; i < birdArray.length; i++) {
          console.log(birdArray[i].comName);
        }
      })
      .catch((error) => {
        console.log(`!!! ERROR while searching states !!!`);
        console.log(error);
      });
  };

  return (
    <div className="row mt-4 login-bg">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body cardBorder">
          <h2 className="py-2 form-name">Enter a state code</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="loginlabel">
                Search
              </label>
              <input
                type="state"
                name="state"
                value={stateSearch}
                onChange={handleStateSearch}
                className="form-control login-input"
              />
            </div>
            <Link
              to="/stateResults"
              type="submit"
              className="btn btn-primary float-right login-button"
            >
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchState;
