import React, { useEffect, useState } from 'react'
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Birds = () => {
  // need to fetch data from API. 
  const [birds,setBirds] = useState([])
  
  useEffect(()=>{
    let url = `${REACT_APP_SERVER_URL}/api/search/states`
    
    axios.get(url)
    .then(response =>{
      setBirds(response.data.states[0].birds)
    })
    .catch(error =>{
      console.log(`!!! ERROR while searching states !!!`)
      console.log(error)
    })
  }, [])
const birdItems = birds.map((bird,index)=>{
  return <li key={index}>{bird}</li>
})
  return (
    <div>
      <h1>Birds by State</h1>

      <div class="container-fluid">
	<div className="row">
		<div className="col-md-4">
			<h2>
				Alabama
			</h2>		
			<ul>{birdItems}</ul>
		</div>
		<div className="col-md-4">
			<h2>
				Alaska
			</h2>
      
		</div>
		<div className="col-md-4">
			<h2>
				Arizona
			</h2>
		
		</div>
	</div>
</div>
       
        
      </div>
  )
}

export default Birds
