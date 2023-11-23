// CircularProgressBar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CircularProgress = styled.svg`
  transform: rotate(-90deg);
`;

const Circle = styled.circle`
  transition: stroke-dashoffset 0.3s;
`;

const BackgroundCircle = styled.circle`
  fill: none;
  stroke: #eee; /* Change this to the desired background color */
  stroke-width: ${(props) => props.strokeWidth || 10}px;
`;

const CircularProgressBar = ({ radius, strokeWidth, percentage }) => {
  const [offset, setOffset] = useState(0);

  const circumference = 2 * Math.PI * radius;
  const offsetCalculation = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    setOffset(offsetCalculation);
  }, [setOffset, offsetCalculation]);

  return (
    <CircularProgress
      height={radius * 2}
      width={radius * 2}
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
    >
      {/* Background Circle */}
      <BackgroundCircle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
      />

      {/* Progress Circle */}
      <Circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="transparent"
        stroke="#a4f8aa" // Change this to the desired color
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </CircularProgress>
  );
};

export default CircularProgressBar;
