import axios from "axios";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
const currentUser = localStorage.getItem("jwtToken");


function Journal(props) {
  // #### REACT HOOKS ####
  const [userName, setUserName] = useState('')
  const [journalEntry, setJournalEntry] = useState('')
  const [birdLocation, setBirdLocation] = useState('')

  const changeNameHandler = e =>{
    setUserName(e.target.value)
    console.log(userName)
  }
  const changeJournalHandler = e =>{
    setJournalEntry(e.target.value)
    console.log(journalEntry)
  }
  const changeBirdLocation = e =>{
    setBirdLocation(e.target.value)    
    console.log(birdLocation)
  }

  const submitHandler = e =>{
    e.preventDefault()
    console.log(`Name: ${userName}`)
    console.log(`Journal Entry: ${journalEntry}`)
    console.log(`Location: ${birdLocation}`)
    
  }

  useEffect(()=>{
    const url = `${REACT_APP_SERVER_URL}/api/journals`
    console.log(localStorage.getItem('jwtToken'))
    axios.get(url, {
      headers: {
        'Authorization': currentUser
      },
    })
    .then(response =>{
      console.log(response.data.journal[0].entries)
      console.log(response.data.journal[0].location)

      const responses = response.data.journal.map((j, idx)=>{
        return (
          <>
          <div key={idx}>{j.entries}</div>
          <div key={idx}>{j.location}</div>
          </>
        )
        
      })
    }).catch(err =>{
      console.log('ERROR in JOURNAL Fetching data from UseEffect')
      console.log(err)
    })
  }, [])

  const JournalEntries = () =>{
    return (
      <>
      <h1>Your recent entries</h1>
      {/* <div>{responses}</div> */}
      </>
    )
  }

  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Your Journal</h1>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor="name">Name</label>
              <input onChange={changeNameHandler} id="name" name="name" ></input>
            </div>
            <div>
              <label htmlFor="entries">Enter Text</label>
              <textarea onChange={changeJournalHandler} id="entries" name="entries"></textarea>
            </div>
            <div>
              <label htmlFor="location">Location of Bird</label>
              <input onChange={changeBirdLocation} id="location" name="location" ></input>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div className="container">
      <JournalEntries />
    </div>
    </>
  );
}

export default Journal;
