import React, { useEffect, useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Birds = () => {
  // need to fetch data from API. 
  const [birds,setBirds] = useState([])
  
  useEffect(()=>{
    let url = `${REACT_APP_SERVER_URL}/api/search/states`
    const newBirdArray = []
    axios.get(url)
    .then(response =>{
      // console.log(response.data)
      // console.log(response.data.states)
      // console.log(response.data.states[0])
      const birdArray = response.data.states[0].birds
      // setBirds(birdArray)
      
      for(let i = 0; i < birdArray.length ; i++){
        let eachBird = birdArray[i]
        console.log(birdArray[i])
        newBirdArray.push(eachBird)
        setBirds(<p>{eachBird}</p>)
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
      {birds}
      
    </div>
  )
}

export default Birds
