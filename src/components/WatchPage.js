import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    console.log(searchParams.get("v"))
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className="m-4 p-4">
      <div className='flex'>
        <iframe
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
         
        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
}

export default WatchPage
