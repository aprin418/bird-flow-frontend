import React, { useState, useEffect } from "react";
import birds from './SearchState';
import axios from "axios";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


function Explore(props) {


//  const {explore, setExplore} = useState("")
  
//  const stateSearchResults = props.history.location.states

    
//         let url = `${REACT_APP_SERVER_URL}/api/search/states`;
//         axios.get(url)
//         .then(response => {
//             console.log(response.data.states)
//             const allBirds = response.data.states;
//             console.log(allBirds);
//              allBirds.push({
//                 pathname: '/explore',
//                 state: {result:allBirds}
//             })
//         })
//         .catch(err => {
//             console.log(err);
//             console.log('error has occured while going to the explore page');
           
//         })

//     const birdList = props.allBirds.map((bird, idx) => {
//         return <ul key={idx}>
//         <li> Common name: {bird.comName}</li>
//        <li> Order: {bird.order}</li>
//        <li> Family common name: {bird.familyComeName}</li>
//       <li> Family scientific name: {bird.familySciName} </li>
//       <br></br>
//         </ul>})

//   return (
//     <div>
//       <h1></h1>
//       <ul>{birdList}</ul>

//     </div>
//   );
// }

// function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        let url = `${REACT_APP_SERVER_URL}/api/search/states`
      axios.get(url)
        .then(res => res.data.states)
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])


    // items.push({
    //     results: props.res.data.states,

    // })
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }

// }
export default Explore;
