// LabsCard.js
import React, { useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom'; 
import { GetSavedProjectData } from '../../components/ProjectContext'

export const ProjectCard = ({ card }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const navigate = useNavigate(); 


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const navigateToCreateProject = () => {
      navigate('/createproject');
  };

  const projectData = GetSavedProjectData();
  
  return (
    <div className="box-card">
      <div className="project-card-header">
        <h4>{card.title}</h4>
        <button className="green-button" onClick={navigateToCreateProject}>Create Project</button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab1')}
        >
          My Projects
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab2')}
        >
          Need to assess
        </div>
        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab3')}
        >
          Invited
        </div>
      </div>

      {activeTab === 'tab1' && (
      <div className="tab-content">
        <div className="project-info">
          <div className="project-title">{projectData ? projectData.title : 'Project Title Placeholder'}</div>
          <div className="active-challenge">{projectData ? projectData.activeChallenge : 'Active Challenge Placeholder'}</div>
        </div>
        <div>{projectData ? projectData.activeChallenge : 'Active Challenge Placeholder'} </div>
        <div className="project-details">
          <div className="project-image">
            {projectData && projectData.uploadedImage && (
              <img src={projectData.uploadedImage} alt="Project Banner" />
            )}
          </div>
          <div className="project-description">
            {projectData ? projectData.description : 'Project Description Placeholder'}
          </div>
        </div>
      </div>
      )}

      {activeTab === 'tab2' && (
        <div className="tab-content">
          <table className="scrollable-table">
            <tbody>
              <tr>
                <td>Item A</td>
              </tr>
              <tr>
                <td>Item B</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'tab3' && (
        <div className="tab-content">
          <table className="scrollable-table">
            <tbody>
              <tr>
                <td>Invited 1</td>
              </tr>
              <tr>
                <td>Invited 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
