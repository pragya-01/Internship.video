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
        var videoLandingPageVariable= document.getElementById("videoLandingPageId")
        if(this.state.isTogglePaused)
        {  
            videoLandingPageVariable.play();
        }
       else
       {
        videoLandingPageVariable.pause();
       }
       this.setState(prevState => ({
           isTogglePaused :!prevState.isTogglePaused
       }));
       
   }

    render()
    {
        var newClassNameVideo="videoLandingPage";
        var newClassNameContent="contentVideoPaused";
        if(this.state.isTogglePaused)
       { newClassNameContent="contentVideo";
          newClassNameVideo="videoLandingPageBlurrEffect";
       }


        return(
   <div className="videoComponentLandingPage">
    <button className="playVideoButtonLandingPage" id="playVideoButtonLandingPage" 
    onClick={this.playVideo}>{this.state.isTogglePaused ? <FaPlayCircle/> : <FaPauseCircle/>} </button>
    <video  className={newClassNameVideo} id="videoLandingPageId" src={video} type="video/mp4" 
    poster={PosterImageVideoComponent} />
      <div className={newClassNameContent}>
           <p className="titleVideoLandingPage">
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
