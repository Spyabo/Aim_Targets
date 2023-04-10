import { useState } from "react";
import Sidebar from "./Sidebar";
import TargetArea from "./TargetArea";

const PlayArea = () => {
  const [score, setScore] = useState(0);
  const [health, setHealth] = useState(3);
  const [highScores, setHighscore] = useState(() => {
    const highScores = localStorage.getItem("highScores");

    return highScores ? JSON.parse(highScores).slice(0, 10) : [];
  });

  return (
    <div className="playarea">
      <TargetArea
        setScore={setScore}
        health={health}
        score={score}
        setHighscore={setHighscore}
      />
      <Sidebar
        score={score}
        setScore={setScore}
        health={health}
        highScores={highScores}
        setHealth={setHealth}
      />
    </div>
  );
};

export default PlayArea;
