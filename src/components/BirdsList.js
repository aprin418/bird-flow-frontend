import React, {useState, useEffect} from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const BirdsList = () => {
  // list of birds
  const [birds, setBirds] = useState([])
  // const [bName, setBName] = useState('')

  useEffect(()=>{
   
    let tempBirdName = 'goose'
    const url = `${REACT_APP_SERVER_URL}/api/search/birds/${tempBirdName}`
    // axios({
    //   method:`GET`,
    //   url:url,
    //   headers:{'Content-Type': 'application/x-www-form-urlencoded'},
    //   params:{'bird':'goose'}
    //   }
    // )
    axios.get(url)
    .then(response =>{
    // Set the bird variable to the data response array
    setBirds(response.data.birds)
    })
    .catch(err =>{
      console.log('ERROR IN useEffect')
      console.log(err)
    })
  }, [])

  //use a MAP to create new array to create the list item or other HTML element
  const birdArray = birds.map((bird, index)=>{
      return <li key={index}> {bird.comName} </li>
  })

  /* ########################END OF AXIOS CALL################################# */

  return (
    <div>
      <h1>Birds List</h1>
      <ul>{birdArray}</ul>
    </div>
  )
}

export default BirdsList
