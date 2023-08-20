// MatchDisplay.js
import React from "react";

const MatchDisplay = ({ selectedSport }) => {
  return (
    <div className="match-display">
      <h2>{selectedSport.sport} Matches</h2>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Match</th>
      <th scope="col">Location</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  </table>


      <div className="data">
        {selectedSport.matches.map((match, index) => (
          <ul key={index}>{
            <table className="table">
            <tbody>
              <tr>
                <th>{index+1}</th>
                <th>{match.teamA} .vs. {match.teamB}</th>
                <th>{match.location}</th>
                <th>{match.time}</th>
              </tr>
            </tbody>
            </table>
          }
            {/* {match.teamA} vs. {match.teamB} | Location: {match.location} | Time: {match.time} */}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MatchDisplay;
