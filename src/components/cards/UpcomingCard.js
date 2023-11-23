import React from 'react';
import './Card.css';
import { FaRegCalendarAlt } from 'react-icons/fa';

export const UpcomingCard = ({ card }) => {
  return (
    <div className="box-card">
      <h4>{card.title}</h4>
      <div className='upcoming-content'>
        <FaRegCalendarAlt className="upcoming-icon" />
        <div className="upcoming-text-container">
          <p>Getting Started with Youth Boost</p>
          <p>Due March 31 at 11:50PM</p>
        </div>
      </div>
    </div>
  );
};
