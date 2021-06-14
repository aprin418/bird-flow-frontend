import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem("jwtToken");

function Journal(props) {
  const [journalEntry, setJournalEntry] = useState("");
  const [birdLocation, setBirdLocation] = useState("");
  const [journals, setJournals] = useState([]);
  const changeJournalHandler = (e) => {
    setJournalEntry(e.target.value);
  };
  const changeBirdLocation = (e) => {
    setBirdLocation(e.target.value);
  };
  const deleteEntry = async (journal) => {
    await fetch(`${REACT_APP_SERVER_URL}/api/journals/${journal._id}`, {
      method: "DELETE",
      headers: {
        Authorization: currentUser,
      },
    }).then((res) => {
      window.location.reload();
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `${REACT_APP_SERVER_URL}/api/journals`;
    try {
      const updatedJournal = await axios({
        method: "post",
        url: url,
        headers: {
          Authorization: currentUser,
          "Content-Type": "application/json",
        },
        data: {
          entries: journalEntry,
          location: birdLocation,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const url = `${REACT_APP_SERVER_URL}/api/journals`;
    axios
      .get(url, {
        headers: {
          Authorization: currentUser,
        },
      })
      .then((response) => {
        let newJournals = response.data.journal;
        setJournals(newJournals);
      })
      .catch((err) => {
        console.log("ERROR in JOURNAL Fetching data from UseEffect");
        console.log(err);
      });
  }, []);

  const seeJournal = journals.map((j, i) => {
    return (
      <div>
        <li style={{ listStyle: "none" }}> Entry ID: {j._id}</li>
        <li style={{ listStyle: "none" }}>
          Date: {moment(j.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}{" "}
        </li>
        <li style={{ listStyle: "none" }}>{j.entries}</li>
        <li style={{ listStyle: "none" }}>Location: {j.location}</li>
        <button
          onClick={() => {
            deleteEntry(j);
          }}
        >
          Remove Entry
        </button>
        <br></br>
      </div>
    );
  });

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1>Your Journal</h1>
            <form onSubmit={submitHandler}>
              <div>
                <label htmlFor="entries">Enter Text</label>
                <textarea
                  onChange={changeJournalHandler}
                  id="entries"
                  name="entries"
                ></textarea>
              </div>
              <div>
                <label htmlFor="location">Location of Bird</label>
                <input
                  onChange={changeBirdLocation}
                  id="location"
                  name="location"
                ></input>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <hr></hr>
        <h2>Recent entries:</h2>
        <ul>{seeJournal}</ul>
      </div>
    </>
  );
}

export default Journal;
