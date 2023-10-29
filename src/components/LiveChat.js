import React, { useEffect, useState } from 'react'
import Chats from './Chats'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { randomName } from '../utils/helper'

const LiveChat = () => {
    const [yourMessage,setYourMessage]=useState()
    console.log("Your message", yourMessage)
    const dispatch =useDispatch()
    const chats=useSelector(store=>store.chat.messages)
    console.log("chats fetched",chats)
    useEffect(()=>{
        // API Polling
        const i=setInterval(()=>{
            console.log("API POLLING")
            dispatch(addMessages({
                name:randomName(),
                message:"Hey you"
            }))
        },2000)

        return ()=>{clearInterval(i)}
    },[])

    const handleMessageSubmit=()=>{
        dispatch(addMessages({
            name:"Rajeev",
            message:yourMessage
        }))
        setYourMessage("")
    }

  return (
    <div className='flex flex-col'>
      <div className="mx-2 p-4 bg-gray-100 w-72 overflow-y-scroll h-[500px] flex flex-col-reverse">
        {chats.map((chat, index) => (
          <Chats key={index} name={chat.name} message={chat.message}></Chats>
        ))}
      </div>
      <div className='input m-2 p-2 flex justify-between'>
        <input className='px-2 border border-b-4' value={yourMessage} onChange={(e)=>setYourMessage(e.target.value)} type='text' placeholder='say someting'></input>
        <button className='bg-gray-100 px-2 py-1  rounded-lg' onClick={handleMessageSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default LiveChat
