// Sidebar.js
import React from "react";

const Sidebar = ({ sports, onSelectSport }) => {
  return (
    <div className="sidebar">
      {sports.map((sport, index) => (
        <div key={index} className="sidebar-item" onClick={() => onSelectSport(sport)}>
          <img src={sport.icon} alt={sport.sport} className="sport-icon" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
