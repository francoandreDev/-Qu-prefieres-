import React from 'react';
import './HighlightWrapper.css';

interface HighlightWrapperProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const HighlightWrapper: React.FC<HighlightWrapperProps> = ({ children, backgroundImage }) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="highlight-wrapper" style={backgroundStyle}>
      <div className="highlight-content">{children}</div>
    </div>
  );
};

export default HighlightWrapper;
