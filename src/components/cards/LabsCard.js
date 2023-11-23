import React, { useState } from 'react';
import './Card.css';

export const LabsCard = ({ card }) => {
  const [activeTab, setActiveTab] = useState('tab1'); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="box-card">
      <h4>{card.title}</h4>

      <div className="tabs">
        <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab1')}
        >
          My Labs
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabChange('tab2')}
        >
          Invited
        </div>
      </div>

      {activeTab === 'tab1' && (
        <div className="tab-content">
          <table className="scrollable-table">
            <tbody>
              <tr>
                <td>Item 1</td>
              </tr>
              <tr>
                <td>Item 2</td>
              </tr>
            </tbody>
          </table>
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
    </div>
  );
};
