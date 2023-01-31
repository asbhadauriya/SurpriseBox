import React, { useState } from "react";
function SurpriseBox() {
  const [username, setUsername] = useState("");
  const [winnerList, setWinnerList] = useState([1, 3, 5, 10]);
  const [visits, setVisits] = useState({});
  const incrementVisits = (username) => {
    setVisits({
      ...visits,
      [username]: (visits[username] || 0) + 1
    });
  };
  const checkWinner = (username) => {
    const count = visits[username] || 0;
    return winnerList.includes(count) ? "Winner" : "Loser";
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    incrementVisits(username);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>Result: {checkWinner(username)}</div>
    </div>
  );
}
export default SurpriseBox;
