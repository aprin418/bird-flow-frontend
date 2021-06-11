import React, {useState, useEffect} from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const BirdsList = () => {
  // list of birds
  // const [birds, setBirds] = useState([])
  

  useEffect(()=>{
    const url = `${REACT_APP_SERVER_URL}/api/search/birds`
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   }
    // }

    axios({
      method:`GET`,
      url:url,
      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
      params:{'bird':'goose'}
      }
    )
    .then(response =>{
    console.log(response.data)
    })
    .catch(err =>{
      console.log('ERROR IN useEffect')
      console.log(err)
    })
  }, [])

  /* ########################END OF AXIOS CALL################################# */

  return (
    <div>
      <h1>Birds List 2</h1>
    </div>
  )
}

export default BirdsList
