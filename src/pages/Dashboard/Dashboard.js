import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

/* Cards */
import { ProgressCard } from '../../components/cards/ProgressCard';
import { LeaderboardCard } from '../../components/cards/LeaderboardCard';
import { UpcomingCard } from "../../components/cards/UpcomingCard";
import { ContinueCard } from "../../components/cards/ContinueCard";
import { AchievementsCard } from "../../components/cards/AchievementsCard";
import { LabsCard } from "../../components/cards/LabsCard";
import { ChallengesCard } from "../../components/cards/ChallengesCard";
import { ProjectCard } from "../../components/cards/ProjectCard";

import "./Dashboard.css";



export const Dashboard = () => {


  const boxCardsData = [
    { title: 'My Progress', content: 'You joined Preprlabs on Nov 13, 2023, here is your Challenge journey' },
    { title: 'Continue Where You Left Off', content: 'We found that you were working on this Challeenge last time, do you want to continue working on it?' },
    { title: 'Upcoming Challenge Deadlines'},
    { title: 'Leaderboard'},
    { title: 'Latest Achievement', content: 'Join Challenges and Labs, get awarded with micro-credentials' },
    { title: 'Labs'},
    { title: 'Challenges'},
    { title: 'Project'},
  ];

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2 className="header">Good afternoon, Venura.</h2>
        <div className="large-card">
          <div className="box-card-grid">
            <ProgressCard card={boxCardsData[0]}/>
            <ContinueCard card={boxCardsData[1]}/>
            <UpcomingCard card={boxCardsData[2]}/>
            <LeaderboardCard card={boxCardsData[3]}/>
            <AchievementsCard card={boxCardsData[4]}/>
            <LabsCard card={boxCardsData[5]} className="larger-card"/>
            <ChallengesCard card={boxCardsData[6]} className="larger-card"/>
            <ProjectCard card={boxCardsData[7]} className="larger-card" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};