import React from 'react'
import './Card.css';
import CircularProgressBar from "../ProgressBar/CircularProgressBar"
export const ProgressCard = ({card}) => {
  return (
    <div className="box-card">
      <h4>{card.title}</h4>
      <p>{card.content}</p>
      <div className='progress-box-card'>
        <div className="text-div-left">
            <p>Project Submitted: 0</p>
            <br/>
            <p>Project Created: 0</p>
            <br/>
            <p>Invited: 0</p>
            <br/>
            <p>Followed: 0</p>
        </div>
        <div className='text-div-right'>
          <CircularProgressBar radius={75} strokeWidth={10} percentage={5} />
          <h4>0/22
            <br/>Challenges</h4>
        </div>
      </div>
      
    </div>
  )
}
