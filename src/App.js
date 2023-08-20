//import logo from './logo.svg';
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MatchDisplay from "./components/MatchDisplay";
import "./App.css";


const sportsData = [
  {
    sport: "Football",
    icon: "/images/football.png", // Path to the football icon image
    matches: [
      { teamA: "IIT Kanpur", teamB: "IIT BHU", location: "ADV Ground", time: "10:00 AM" },
      { teamA: "IIT Delhi", teamB: "IIT Bombay", location: "Gymkhana", time: "2:00 PM" },
      { teamA: "IIT Madras", teamB: "IIT BHU", location: "Gymkhana", time: "3:00 PM" },
      // Add more matches
    ],
  },
  {
    sport: "Tennis",
    icon: "/images/tennis.png", // Path to the basketball icon image
    matches: [
      { teamA: "IIT Madras", teamB: "IIT Delhi", location: "Rajputana Ground", time: "8:00 AM" },
      { teamA: "IIT BHU", teamB: "IIT Bombay", location: "ADV Ground", time: "4:00 PM" },
      // Add more matches
    ],
  },
  {
    sport: "Cricket",
    icon: "/images/cricket.png", // Path to the basketball icon image
    matches: [
      { teamA: "IIT Bombay", teamB: "IIT Madras", location: "Gymkhana", time: "9:30 AM" },
      { teamA: "IIT BHU", teamB: "IIT Delhi", location: "MMM Stadium", time: "5:30 PM" },
      { teamA: "IIT Madras", teamB: "IIT BHU", location: "Gymkhana", time: "6:00 PM" },
      // Add more matches
    ],
  },
  {
    sport: "Basketball",
    icon: "/images/basketball.png", // Path to the basketball icon image
    matches: [
      { teamA: "IIT Delhi", teamB: "IIT Bombay", location: "Rajputana Ground", time: "11:00 AM" },
      { teamA: "IIT Madras", teamB: "IIT BHU", location: "Gymkhana", time: "3:00 PM" },
      // Add more matches
    ],
  },
  {
    sport: "Hockey",
    icon: "/images/hockey.png", // Path to the basketball icon image
    matches: [
      { teamA: "IIT Madras", teamB: "IIT BHU", location: "MMM Stadium", time: "10:00 AM" },
      { teamA: "IIT Bombay", teamB: "IIT Delhi", location: "Gymkhana", time: "2:00 PM" },
      // Add more matches
    ],
  },
  // Add data for other sports
];
  
  function App() {
    const [selectedSport, setSelectedSport] = useState(sportsData[0]); // Initialize with the first sport
  
    const handleSelectSport = (sport) => {
      setSelectedSport(sport);
    };
  
    return (
      <div className="app">
        <div className="heading">
          <h1>SPARDHA</h1>
        </div>
        <div className="display">
        <Sidebar sports={sportsData} onSelectSport={handleSelectSport} />
        <MatchDisplay selectedSport={selectedSport} />
        </div>
      </div>
    );
  }
  
  export default App;