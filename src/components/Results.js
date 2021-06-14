import React, { useState } from "react";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function WelcomeResults(props) {
  console.log(props);
  const stateSearchResults = props.history.location.state.results;
  const stateAbbreviation = props.history.location.search.replace("?", "");
  const birdList = stateSearchResults.map((bird, idx) => {
    return (
      <ul key={idx}>
        <div className="birdCard">
          <li> Common name: {bird.comName}</li>
          <li> Order: {bird.order}</li>
          <li> Family common name: {bird.familyComeName}</li>
          <li> Family scientific name: {bird.familySciName} </li>
        </div>
        <br></br>
      </ul>
    );
  });

  return (
    <div className="state-results-bg">
      <h1>All birds in {stateAbbreviation}</h1>
      <ul className="result-ul">
        <div className="grid-child">{birdList}</div>
      </ul>
    </div>
  );
}

export default WelcomeResults;
