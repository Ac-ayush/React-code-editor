import React from 'react';
import emailIcon from './Icones/email.svg';
import linkedInIcon from './Icones/linkedin.svg';
import githubIcon from './Icones/github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="creator-name">Connect with Ayush Chouhan</p>
        <div className="social-links">
          <a href="mailto:ayushc9977@gmail.com" className="social-link">
            <span className="sr-only">Email</span>
            <img src={emailIcon} alt="Email" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/chouhan-ayush/" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="sr-only">LinkedIn</span>
            <img src={linkedInIcon} alt="LinkedIn" className="icon" />
          </a>
          <a href="https://github.com/Ac-ayush" target="_blank" rel="noopener noreferrer" className="social-link">
            <span className="sr-only">GitHub</span>
            <img src={githubIcon} alt="GitHub" className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
