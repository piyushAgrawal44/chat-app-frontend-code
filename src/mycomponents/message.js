import React from 'react';
import './message.css'

export default function Message({user, message, side}) {
    if (user) {
    return (
          
        <div className={` ${side} msg`}>
            {` ${user}: ${message}`}
        </div>
    )
      }
      else{
        return (
          
            <div className={` ${side} msg`}>
                {`You: ${message}`}
            </div>
        )
      }
}
