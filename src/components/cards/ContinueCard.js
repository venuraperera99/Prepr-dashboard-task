// ContinueCard.js
import React from 'react';
import './Card.css';
import CircularProgressBar from '../ProgressBar/CircularProgressBar';

export const ContinueCard = ({ card }) => {
  return (
    <div className="box-card">
      <h4>{card.title}</h4>
      <p>{card.content}</p>

      <div className="circular-progress-container">
        <div className="text-div-left-continue">
          <CircularProgressBar radius={75} strokeWidth={10} percentage={0} />
          <h4>Not Started</h4>
        </div>
        <div className="text-div-right-continue">
          <h3>Frontend Developer</h3>
          <p>Frontend Developer Challenge 3: <br/>Dashboard and Project Creation</p>
        </div>
      </div>
    </div>
  );
};
