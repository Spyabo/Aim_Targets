import { useState } from "react";
import Target from "./Target";
import TopScoreForm from "./TopScoreForm";

const TargetArea = ({ score, setScore, health, setHighscore }) => {
  const [values, setTarget] = useState({ x: 0, y: 0, size: 10 });
  const [name, setName] = useState("");

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  let size = getRandomArbitrary(10, 13);

  if (score >= 10 && score < 20) size = getRandomArbitrary(9, 11);
  if (score >= 20 && score < 30) size = getRandomArbitrary(8, 11);
  if (score >= 30 && score < 40) size = getRandomArbitrary(7, 10);
  if (score >= 40 && score < 50) size = getRandomArbitrary(6, 9);
  if (score >= 50 && score < 60) size = getRandomArbitrary(5, 8);
  if (score >= 60 && score < 70) size = getRandomArbitrary(4, 7);
  if (score >= 70 && score < 80) size = getRandomArbitrary(3, 6);
  if (score >= 80 && score < 90) size = getRandomArbitrary(2.5, 5);
  if (score >= 90 && score < 100) size = getRandomArbitrary(2.5, 4);

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
              <h2 id="description-h2">Welcome To Button Aimer!!!</h2>
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
          <TopScoreForm
            setHighscore={setHighscore}
            name={name}
            setName={setName}
            score={score}
          />
        </div>
      )}
    </div>
  );
};

export default TargetArea;
