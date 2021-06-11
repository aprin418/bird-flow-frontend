import React, { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function StateResults(props) {
    
  const stateSearchResults = props.history.location.state.results
  
  // console.log(stateSearchResults[0].comName)


  const birdList = stateSearchResults.map((bird, idx) => {
      return <li key={idx}>{bird.comName}</li>;
    });
  console.log(birdList)
    
  return (
    <div>
      <h1>Results by state</h1>
      <ul>{birdList}</ul>

    </div>
  );
}

export default StateResults;
