import React, { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function StateResults(props) {
  console.log(props)
  const stateSearchResults = props.history.location.state.results
  const stateAbbreviation = props.history.location.search.replace('?','')

  const birdList = stateSearchResults.map((bird, idx) => {
      return <li key={idx}><a href="#">{bird.comName}</a></li>;
    });
  console.log(birdList)
    
  return (
    <div>
      <h1>All birds in {stateAbbreviation}</h1>
      <ul>{birdList}</ul>

    </div>
  );
}

export default StateResults;
