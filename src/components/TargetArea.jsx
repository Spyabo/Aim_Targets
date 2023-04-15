import { useState } from "react";
import Target from "./Target";
import TopScoreForm from "./TopScoreForm";

const TargetArea = ({ score, setScore, health, setHighscore }) => {
  const [values, setTarget] = useState({ x: 0, y: 0, size: 10 });

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  let size;

  const sizeRanges = [
    { scoreRange: [0, 10], sizeRange: [10, 12] },
    { scoreRange: [10, 20], sizeRange: [9, 11] },
    { scoreRange: [20, 30], sizeRange: [8, 11] },
    { scoreRange: [30, 40], sizeRange: [7, 10] },
    { scoreRange: [40, 50], sizeRange: [6, 9] },
    { scoreRange: [50, 60], sizeRange: [5, 8] },
    { scoreRange: [60, 70], sizeRange: [4, 7] },
    { scoreRange: [70, 80], sizeRange: [3, 6] },
    { scoreRange: [80, 90], sizeRange: [2.5, 5] },
    { scoreRange: [90, 100], sizeRange: [2.5, 4] },
  ];

  sizeRanges.forEach((range) => {
    if (score >= range.scoreRange[0] && score < range.scoreRange[1]) {
      size = getRandomArbitrary(range.sizeRange[0], range.sizeRange[1]);
    }
  });

  let x = getRandomArbitrary(0, 100 - size);
  let y = getRandomArbitrary(0, 96 - size);

  return (
    <div id="targetarea">
      {health ? (
        score ? (
          <Target
            values={values}
            onClick={(e) => {
              setTarget({ x, y, size });
              setScore((currentScore) => currentScore + 1);
            }}
          />
        ) : (
          <section id="StartScreen">
            <div>
              <h1>Click The Target To Start</h1>
            </div>
            <div>
              <Target
                values={{ x: 0, y: 0, size: 10 }}
                onClick={(e) => {
                  setTarget({ x, y, size });
                  setScore((currentScore) => currentScore + 1);
                }}
              />
            </div>
            <div>
              <h2 id="description-h2">Welcome To Target Aimer!!!</h2>
              <p id="description">
                Keep clicking the targets, if you're too slow you will lose a
                life. Good Luck!
              </p>
            </div>
          </section>
        )
      ) : (
        <div id="GameOver">
          <h1>Game Over</h1>
          <TopScoreForm setHighscore={setHighscore} score={score} />
        </div>
      )}
    </div>
  );
};

export default TargetArea;
