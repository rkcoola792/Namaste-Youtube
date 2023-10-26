import React from 'react'

const VideoCard = ({videoInfo}) => {
    console.log("vdeos info in card",videoInfo )
    const  {snippet,statistics}=videoInfo;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className="video-card w-80  mx-2 my-2 shadow-lg rounded-lg  cursor-pointer">
      <img className="rounded-lg" src={thumbnails?.standard?.url}></img>
      <div className='video-card-info-div m-2 '>
        <ul>
          <li className='font-bold mb-1'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
}

export default VideoCard
