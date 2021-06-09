import React from 'react';
import birdvid from './videos/birdvid.mp4'
const Welcome = () => {
    return (
        <div>
            <section>
            <form>
                <div>
                    {/* search database on home page */}
                <label>Name</label>  
                <input></input>

                <label>Region</label>  
                <input></input>

                <label>State</label>  
                <input></input>
                
                </div>
            </form>

            <video autoPlay loop muted  className="video1">
             
                <source src={birdvid} type="video/mp4"/>
            </video>
            </section>
            
        </div>
    )
}

export default Welcome;