import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
  useEffect(()=>{
    fetchFromYoutubeApi();
  },[])

  const [videos,setVideos]=useState();

  const fetchFromYoutubeApi=async()=>{
    const data= await fetch(YOUTUBE_VIDEOS_URL)
    const json =await data?.json();
    console.log("Json videos",json)
    setVideos(json?.items)
        

  }
  console.log("Youtube APi data", videos);
  return (
    <div className="flex flex-wrap">
      {videos?.map((video) => (
        <Link to={"/watch?v="+video.id}>
          <VideoCard key={video.id} videoInfo={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer
