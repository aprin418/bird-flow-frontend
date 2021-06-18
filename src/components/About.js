import React from 'react';
import GithubLogo from './images/github-icons/GitHub-Mark-Light-32px.png'



const About = () => {
    return (
      
          <div className="about-bg ">
              <div className="about-paragraph card card-body cardBorder-about">
              <h1>About Bird Flow 🐦</h1>
              <p>
              Bird Flow is a site for bird lovers. Our goal is to enable you to document your bird watching experiences. Easily create a journal, and upload pictures of beautiful birds you've seen.
              <br />
              <br />
              Need ideas? Discover birds you never heard of by using our <a href="/">Explore</a> page!
              </p>
              <br />
              <span className="text-left"><h2 className="h1">Meet the Team</h2></span>
              <div className="container mt-1">
                  <div className="row mt-0" style={{background:"rgba(0,0,0,.5)", borderRadius:"20px"}}>
                  <div className="col-sm text-center about-name">Aaron Prince
                    <div className="text-center mt-2">
                      <a href="https://github.com/aprin418" target="_blank" rel="noreferrer"><img src={GithubLogo} alt="Github Link for Aaron Prince"/>
                        <div>Github</div> 
                      </a>
                    </div>
                  </div>
                  <div className="col-sm text-center about-name">Chris Rachal
                    <div className="text-center mt-2">
                      <a href="https://github.com/chrisrachal" target="_blank" rel="noreferrer"><img src={GithubLogo} alt="Github Link for Chris Rachal"/>
                        <div>Github</div> 
                      </a>
                    </div>
                  </div>
                  <div className="col-sm text-center about-name">Maurice Chevez
                    <div className="text-center mt-2">
                      <a href="https://github.com/mauricechevez" target="_blank" rel="noreferrer"><img src={GithubLogo} alt="Github Link for Maurice Chevez"/>
                        <div>Github</div> 
                      </a>
                    </div>
                  </div>
                  <div className="col-sm text-center about-name">Sebastian Gayle
                    <div className="text-center mt-2">
                      <a href="https://github.com/Purplepro" target="_blank" rel="noreferrer"><img src={GithubLogo} alt="Github Link for Sebastian Gayle"/>
                        <div>Github</div> 
                      </a>
                    </div>
                  </div>
                  <div className="col-sm text-center about-name">Shawn Dunn
                    <div className="text-center mt-2">
                      <a href="https://github.com/jshawndunn" target="_blank" rel="noreferrer"><img src={GithubLogo} alt="Github Link for Shawn Dunn"/>
                        <div>Github</div> 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
    
    )
}

export default About;