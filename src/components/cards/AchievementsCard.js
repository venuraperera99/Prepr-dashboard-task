import React from 'react'
import './Card.css';
import pic1 from "../../pics/latest_achievement.png";

export const AchievementsCard = ({ card }) => {
  return (
    <div className="box-card">
      <h4>{card.title}</h4>
      <p>{card.content}</p>
      <img src={pic1} alt="Achievement" />
    </div>
  );
};
