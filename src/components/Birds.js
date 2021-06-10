import React, { useEffect } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Birds = () => {
  // need to fetch data from API. 
  // What do we currently have? States
  useEffect(()=>{
    let url = `${REACT_APP_SERVER_URL}/api/search/states`
    axios.get(url)
    .then(response =>{
      console.log(response.data)
    })
    .catch(error =>{
      console.log(`!!! ERROR while searching states !!!`)
      console.log(error)
    })
  }, [])

  return (
    <div>
      <h1>Birds Page</h1>
    </div>
  )
}

export default Birds
