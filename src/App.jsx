import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


  function YoutubeComponent(props){
    return (
      <div className="container">
        <img src={props.thumbnailImg} />
        <div className="content">
          <p>{props.videoTitle}</p>
          <p>{props.uploader}</p>
          <p>{props.videoUploaded}</p>
          <p>{props.videoViews}</p>
        </div>
      </div>
    )
  }

  function App() {
    let sampleData = [
      {
        thumbnailImg: "https://via.placeholder.com/600x400",
        videoTitle: "He did WHAT?!?! (My intial reaction)",
        videoUploader: "MaxTongster",
        dateVideoUploaded: "10-31-2022",
        videoViews: 10
      },
      {
        thumbnailImg: "https://via.placeholder.com/600x400",
        videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
        videoUploader: "Dave Doughbrick",
        dateVideoUploaded: "11-02-2022",
        videoViews: 300000
      },
      {
        thumbnailImg: "https://via.placeholder.com/600x400",
        videoTitle: "React in 100 seconds",
        videoUploader: "Fireship",
        dateVideoUploaded: "2022-09-08",
        videoViews: 255
      }
    ];
  
     return (
      <div className="app-container">
        {sampleData.map((infoObject)=>{
          console.log(infoObject);
          return (
            <YoutubeComponent thumbnailImg={infoObject.thumbnailImg}
            videoTitle={infoObject.videoTitle}
            uploader={infoObject.videoUploader} 
            videoViews={infoObject.videoViews} 
            videoUploaded={infoObject.dateVideoUploaded} />
          )
        }) 
        }
        {/* <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400" 
        videoTitle="Why a chesseburger?"
        uploader="Mark"
        videoUploaded="11/30/2022" 
        videoViews="5" />
        <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400" 
        videoTitle="Why a chesseburger?"
        uploader="Mark"
        videoUploaded="11/30/2022" 
        videoViews="6" />
        <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400" 
        videoTitle="Why a chesseburger?"
        uploader="Mark"
        videoUploaded="11/30/2022" 
        videoViews="5" /> */}
        {/* <ul>
          <li>
            {listOfPokemon.find(pokemon => pokemon === "Pikatchu") }
          </li>
          {listOfPokemon.map()}
        </ul> */}
      </div>
     )
}

export default App
