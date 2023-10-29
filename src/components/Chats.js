import React from 'react'

const Chats = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm'>
      <img
        className="h-8 "
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      ></img>
      <sapn className='font-bold ml-1'>{name}: </sapn>
      <span className='ml-1'>{message}</span>
    </div>
  );
}

export default Chats
