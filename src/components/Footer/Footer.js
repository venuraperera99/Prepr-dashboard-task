import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">v24.0.9</div>
      <div className="footer-middle">
        Privacy policy | Terms of use | Help Center
      </div>
      <div className="footer-right">
        Powered by <strong>LearnLab.ai</strong>
      </div>
    </div>
  );
};