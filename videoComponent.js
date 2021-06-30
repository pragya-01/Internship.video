import React, { Component } from 'react'
import './videoComponent.css';
import {FaPlayCircle} from 'react-icons/fa'
import {FaPauseCircle} from 'react-icons/fa'
import video from './video.mp4'
import PosterImageVideoComponent from './posterImage.jpg'

export default class videoComponent extends Component
{
    
    constructor(props) 
    {
        super(props);
        this.state={isTogglePaused: true};
        this.playVideo = this.playVideo.bind(this);
    }

   playVideo() 
    {
        if(this.state.isTogglePaused){
        this.setState(prevState => ({
            isTogglePaused :!prevState.isTogglePaused
        }));
    }
    }

    render()
    {
        let newClassName="contentVideo";
        if(this.state.isTogglePaused)
       { newClassName="contentVideoPlay";}


        return(
   <div className="videoComponentLandingPage">
    <video className="videoLandingPage" id="video1" src={video} type="video/mp4" 
    poster={PosterImageVideoComponent} />
    <div className={newClassName}>
    <button className="playVideoButtonLandingPage" id="playVideoButtonLandingPage" 
    onClick={this.playVideo}><FaPlayCircle/> </button>
           <p>
               Watch Video
           </p>
            <p>
                Unlock Your Potential
            </p>
        <p>
          Introduce your video by telling yur visitors how they'll benefit  
          by watching this short clip. Provide a brief summary of the content.
        </p>
    </div>
</div>

        );
    }

    }; 
    /* poster={PosterImageVideoComponent}
     

        if((this).paused)
                {
                    (this).play();
                    (this).removeClass('blurEffect');
                    ('.contentVideo').hide();
                }
    
    */
