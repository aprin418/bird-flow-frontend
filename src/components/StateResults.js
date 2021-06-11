import React, { useState } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function StateResults(props) {
  const stateSearchResults = props.history.location.state.results;

  console.log(stateSearchResults[0].comName);

  // console.log(stateSearchResults[i].comName);
  // const birdList = stateSearchResults.map((bird, idx) => {
  //   return <li key={idx}>{bird}</li>;
  // });

  return (
    <div>
      <h1>Results by state</h1>
      <ul></ul>
    </div>
  );
}

export default StateResults;
