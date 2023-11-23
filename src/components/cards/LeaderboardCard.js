// LeaderboardCard.js
import React from 'react';
import './Card.css';

export const LeaderboardCard = ({ card }) => {
  // Sample data for the leaderboard table
  const leaderboardData = [
    { username: 'User1', points: 150, rank: 1, achievements: 8 },
    { username: 'User2', points: 120, rank: 2, achievements: 6 },
    { username: 'User3', points: 100, rank: 3, achievements: 5 },
    { username: 'User4', points: 90, rank: 4, achievements: 4 },
    { username: 'User5', points: 80, rank: 5, achievements: 3 },
    { username: 'User6', points: 75, rank: 6, achievements: 3 },
    { username: 'User7', points: 70, rank: 7, achievements: 2 },
    { username: 'User8', points: 65, rank: 8, achievements: 2 },
    { username: 'User9', points: 60, rank: 9, achievements: 1 },
    { username: 'User10', points: 55, rank: 10, achievements: 1 },
    { username: 'User11', points: 50, rank: 11, achievements: 1 },
    { username: 'User12', points: 45, rank: 12, achievements: 0 },
    { username: 'User13', points: 40, rank: 13, achievements: 0 },
    { username: 'User14', points: 35, rank: 14, achievements: 0 },
    { username: 'User15', points: 30, rank: 15, achievements: 0 },
    { username: 'User16', points: 25, rank: 16, achievements: 0 },
    { username: 'User17', points: 20, rank: 17, achievements: 0 },
    { username: 'User18', points: 15, rank: 18, achievements: 0 },
    { username: 'User19', points: 10, rank: 19, achievements: 0 },
    { username: 'User20', points: 5, rank: 20, achievements: 0 },
  ];

  return (
    <div className="box-card">
      <h4>{card.title}</h4>
      {/* Dropdown Row */}
      <div className="dropdown-row">
        <div className="dropdown-container">
          <label htmlFor="organization">Organization</label>
          <select id="organization" name="organization">
            <option value="org1">Organization 1</option>
            <option value="org2">Organization 2</option>
          </select>
        </div>

        <div className="dropdown-container">
          <label htmlFor="lab">Lab</label>
          <select id="lab" name="lab">
            <option value="lab1">Lab 1</option>
            <option value="lab2">Lab 2</option>
          </select>
        </div>

        <div className="dropdown-container">
          <label htmlFor="challenge">Challenge</label>
          <select id="challenge" name="challenge">
            <option value="challenge1">Challenge 1</option>
            <option value="challenge2">Challenge 2</option>
          </select>
        </div>

        <div className="dropdown-container">
          <label htmlFor="sortBy">Sort By</label>
          <select id="sortBy" name="sortBy">
            <option value="date">Date</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div className="leaderboard-table-container">
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Learning Points</th>
              <th>Learning Rank</th>
              <th>Achievements</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((row, index) => (
              <tr key={index}>
                <td>{row.username}</td>
                <td>{row.points}</td>
                <td>{row.rank}</td>
                <td>{row.achievements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
