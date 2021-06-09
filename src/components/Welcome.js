import React from 'react';
import birdvid from './videos/birdvid.mp4'
const Welcome = () => {
    return (
        <div>
          <section>
            
            <video autoPlay loop muted  className="video1">
             
                <source src={birdvid} type="video/mp4"/>
            </video>
            </section>
            
        </div>
    )
}

export default Welcome;