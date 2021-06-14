import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem("jwtToken");

function Journal(props) {
  // #### REACT HOOKS ####

  // const [userName, setUserName] = useState('')
  const [journalEntry, setJournalEntry] = useState("");
  const [birdLocation, setBirdLocation] = useState("");
  const [journals, setJournals] = useState([]);

  // const changeNameHandler = e =>{
  //   setUserName(e.target.value)
  //   console.log(userName)
  // }
  const changeJournalHandler = (e) => {
    setJournalEntry(e.target.value);
    console.log(journalEntry);
  };
  const changeBirdLocation = (e) => {
    setBirdLocation(e.target.value);
    console.log(birdLocation);
  };

  const deleteEntry = (e) =>{
    e.preventDefault()
    console.log()
  }


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(currentUser);
    // console.log(`Journal Entry: ${journalEntry}`)
    // console.log(`Location: ${birdLocation}`)

  const url = `${REACT_APP_SERVER_URL}/api/journals`;
    try {
      const updatedJournal = await axios({
        method: "post",
        url: url,
        headers: {
          Authorization: currentUser,
          "Content-Type": "application/json",
        },
        data:{
          'entries':journalEntry,
          'location':birdLocation
        }
      })
      console.log(updatedJournal)
      // props.history.push('/journal')
      window.location.reload();     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const url = `${REACT_APP_SERVER_URL}/api/journals`;
    console.log(localStorage.getItem("jwtToken"));
    axios
      .get(url, {
        headers: {
          Authorization: currentUser,
        },
      })
      .then((response) => {
        let newJournals = response.data.journal;
        // console.log(newJournals[0])
        // console.log(newJournals[1])
        setJournals(newJournals);
        console.log(newJournals);

        // setJournals(response.data)
      })
      .catch((err) => {
        console.log("ERROR in JOURNAL Fetching data from UseEffect");
        console.log(err);
      });
  }, []);

  const seeJournal = journals.map((j, i) => {
    //  console.log(j.entries)
    return (
      <div>
        <li style={{ listStyle:'none'}} > Entry ID: {j._id}</li>
        <li style={{ listStyle: "none" }}>Date:{j.date} </li>
        <li style={{ listStyle: "none" }}>{j.entries}</li>
        <li style={{ listStyle: "none" }}>Location: {j.location}</li>
        <button type="submit">Delete</button>
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
              {/* <div>
              <label htmlFor="name">Name</label>
              <input onChange={changeNameHandler} id="name" name="name" ></input>
            </div> */}
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
