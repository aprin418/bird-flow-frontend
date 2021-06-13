import React from "react";
import birdvid from "./videos/birdvid.mp4";
import { LinkScroll, animateScroll as scroll } from "react-scroll";
import {Link } from 'react-router-dom';


const Welcome = (props) => {
  return (
    <div className="Home-container">
      <section className="home-section1">
        <div className="container top-half-for-home">
        <h1 className="homeheader">Which Bird have you seen today?</h1>
        <Link className="btn-primary exploreButton" to="/explore">Explore</Link>
        </div>

        <video autoPlay loop muted className="video1">
          <source src={birdvid} type="video/mp4" />
        </video>
      </section>

      <div className="homeFormSection">
      {/* <main className="homeMain"> */}

      <h1 className="h1-for-home-div">Search a bird of your choice</h1>
      
      <div className="child-div1">
        <form className="bird_search_form">
      
            <label className="HomeSearch">Name</label>
            <input className="birdSearch"  />
            <label className="HomeSearch">State</label> 
            <select className="birdSearch">
            <option>AL</option>
            <option>AK</option>
            <option>AZ</option>
            <option>AR</option>
            <option>CA</option>
            <option>CO</option>
            <option>CT</option>
            <option>DE</option>
            <option>FL</option>
            <option>GA</option>
            <option>HI</option>
            <option>ID</option>
            <option>IL</option>
            <option>IN</option>
            <option>IA</option>
            <option>KS</option>
            <option>KY</option>
            <option>LA</option>
            <option>ME</option>
            <option>MD</option>
            <option>MA</option>
            <option>MI</option>
            <option>MN</option>
            <option>MS</option>
            <option>MO</option>
            <option>MT</option>
            <option>NE</option>
            <option>NV</option>
            <option>NH</option>
            <option>NJ</option>
            <option>NM</option>
            <option>NY</option>
            <option>NC</option>
            <option>ND</option>
            <option>OH</option>
            <option>OK</option>
            <option>OR</option>
            <option>PA</option>
            <option>RI</option>
            <option>SC</option>
            <option>SD</option>
            <option>TN</option>
            <option>TX</option>
            <option>UT</option>
            <option>VT</option>
            <option>VA</option>
            <option>WA</option>
            <option>WV</option>
            <option>WI</option>
            <option>WY</option>
            </select>
            <button className="btn btn-primary specialButton">Submit</button>
        </form>
        </div>
        <div className="child-div2">
        <p className="paragraph-home">The united states contains as many as 1107 species of birds alone while alaska holds an additional 507 species of
          birds. With that many birds, We know it can get hard to narrow down to which species of birds you want to explore
          so with bird flow.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
