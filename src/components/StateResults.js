import React, { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function StateResults(props) {
    
  const stateSearchResults = props.history.location.state.results
  
  // console.log(stateSearchResults[0].comName)

  // console.log(stateSearchResults[i].comName);
    const birdList = stateSearchResults.map((bird, idx) => {
      return <ul key={idx}>
      <li> Common name: {bird.comName}</li>
     <li> Order: {bird.order}</li>
     <li> Family common name: {bird.familyComeName}</li>
    <li> Family scientific name: {bird.familySciName} </li>
    <br></br>
      </ul>;
    });
    
    
  return (
    <div>
      <h1>Results by state</h1>
      <ul>{birdList}</ul>

    </div>
  );
}

export default StateResults;
