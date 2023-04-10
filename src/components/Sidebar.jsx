import { useEffect } from "react";
import TopScores from "./TopScores";

let intervalTime = 1500;

const Sidebar = ({ score, setScore, health, setHealth, highScores }) => {
  if (score > 0 && score % 10 === 0) {
    intervalTime -= 100;
  }

  useEffect(() => {
    if (score > 0) {
      const lives = setInterval(() => {
        setHealth((health) => health - 1);
      }, intervalTime);

      if (health === 0) {
        clearInterval(lives);
      }
      return () => clearInterval(lives);
    }
  }, [health, score, setHealth]);

  return (
    <div className="sidebar">
      <div>
        <h2>Lives {health}</h2>
      </div>
      <div>
        <h2>Score {score}</h2>
      </div>
      <h2 id="top-scores">Top Scores:</h2>
      <TopScores highScores={highScores} />
      <div>
        <button
          id="restart"
          onClick={() => {
            if (health === 0) {
              intervalTime = 1500;
              setHealth(3);
              setScore(0);
            }
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
