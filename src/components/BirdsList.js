import React, { useState, useEffect } from "react";
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const BirdsList = () => {
  const [birds, setBirds] = useState([]);
  useEffect(() => {
    let tempBirdName = "goose";
    const url = `${REACT_APP_SERVER_URL}/api/search/birds/${tempBirdName}`;
    axios
      .get(url)
      .then((response) => {
        setBirds(response.data.birds);
      })
      .catch((err) => {
        console.log("ERROR IN useEffect");
        console.log(err);
      });
  }, []);

  const birdArray = birds.map((bird, index) => {
    return <li key={index}> {bird.comName} </li>;
  });

  return (
    <div>
      <h1>Birds List</h1>
      <ul>{birdArray}</ul>
    </div>
  );
};

export default BirdsList;
