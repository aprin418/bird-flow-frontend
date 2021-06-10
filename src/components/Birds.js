import React, { useEffect, useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Birds = () => {
  // need to fetch data from API. 
  const [birds,setBirds] = useState('')
  useEffect(()=>{
    let url = `${REACT_APP_SERVER_URL}/api/search/states`
    axios.get(url)
    .then(response =>{
      // console.log(response.data)
      // console.log(response.data.states)
      console.log(response.data.states[0])
      
      const birdArray = response.data.states[0].birds
      console.log(birdArray)
      let newBirdArray = []
      for(let i = 0; i < birdArray.length ; i++){
        console.log(birdArray[i])
        newBirdArray.push()
        
        
      }
    })
    .catch(error =>{
      console.log(`!!! ERROR while searching states !!!`)
      console.log(error)
    })
  }, [])

  return (
    <div>
      <h1>Birds Page</h1>
      <ul>
        
      </ul>
    </div>
  )
}

export default Birds
