import React, { useState } from "react";
import birdvid from "./videos/birdvid.mp4";
import axios from "axios";
import { LinkScroll, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Welcome = (props) => {
  const [stateSearch, setStateSearch] = useState("");
  const [nameSearch, setNameSearch] = useState("");

  const handleWelcomeSearch = (e) => {
    setStateSearch(e.target.value);
    setNameSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `${REACT_APP_SERVER_URL}/api/search/birds/${nameSearch}/US-${stateSearch}`;
    console.log(stateSearch);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.birds);
        const birdArray = response.data.birds;
        console.log(birdArray);
        props.history?.push({
          pathname: "/results",
          search: stateSearch,
          state: {
            results: birdArray,
          },
        });
      })
      .catch((error) => {
        console.log(`!!! ERROR while searching states !!!`);
        console.log(error);
      });
  };

  return (
    <div className="Home-container">
      <section className="home-section1">
        <div className="top-half-for-home">
          <h1 className="homeheader">Which Bird have you seen today?</h1>
          <button className="btn btn-primary exploreButton">Explore</button>
        </div>
        <video autoPlay loop muted className="video1">
          <source src={birdvid} type="video/mp4" />
        </video>
      </section>

      <div className="homeFormSection">
        {/* <main className="homeMain"> */}

        <h1 className="h1-for-home-div">Search a bird of your choice</h1>
        <div className="child-div1">
          <form className="bird_search_form" onSubmit={handleSubmit}>
            <label className="HomeSearch">Name</label>
            <input
              className="birdSearch"
              name="nameSearch"
              id="nameSearch"
              value={this.state.value}
              onChange={this.props.onChange}
            />
            <label className="HomeSearch">State</label>
            <select className="birdSearch">
              <option value="AL">AL</option>
              <option value="AK">AK</option>
              <option value="AZ">AZ</option>
              <option value="AR">AR</option>
              <option value="CA">CA</option>
              <option value="CO">CO</option>
              <option value="CT">CT</option>
              <option value="DE">DE</option>
              <option value="DC">DC</option>
              <option value="FL">FL</option>
              <option value="GA">GA</option>
              <option value="HI">HI</option>
              <option value="ID">ID</option>
              <option value="IL">IL</option>
              <option value="IN">IN</option>
              <option value="IA">IA</option>
              <option value="KS">KS</option>
              <option value="KY">KY</option>
              <option value="LA">LA</option>
              <option value="ME">ME</option>
              <option value="MD">MD</option>
              <option value="MA">MA</option>
              <option value="MI">MI</option>
              <option value="MN">MN</option>
              <option value="MS">MS</option>
              <option value="MO">MO</option>
              <option value="MT">MT</option>
              <option value="NE">NE</option>
              <option value="NV">NV</option>
              <option value="NH">NH</option>
              <option value="NJ">NJ</option>
              <option value="NM">NM</option>
              <option value="NY">NY</option>
              <option value="NC">NC</option>
              <option value="ND">ND</option>
              <option value="OH">OH</option>
              <option value="OK">OK</option>
              <option value="OR">OR</option>
              <option value="PA">PA</option>
              <option value="RI">RI</option>
              <option value="SC">SC</option>
              <option value="SD">SD</option>
              <option value="TN">TN</option>
              <option value="TX">TX</option>
              <option value="UT">UT</option>
              <option value="VT">VT</option>
              <option value="VA">VA</option>
              <option value="WA">WA</option>
              <option value="WV">WV</option>
              <option value="WI">WI</option>
              <option value="WY">WY</option>
            </select>
            <button type="submit" className="btn btn-primary specialButton">
              Submit
            </button>
          </form>
        </div>
        <div className="child-div2">
          <p className="paragraph-home">
            The united states contains as many as 1107 species of birds alone
            while alaska holds an additional 507 species of birds. With that
            many birds, We know it can get hard to narrow down to which species
            of birds you want to explore so with bird flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
