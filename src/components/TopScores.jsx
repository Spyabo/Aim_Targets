import { useEffect } from "react";

const TopScores = ({ highScores }) => {
  useEffect(() => {
    if (highScores.length > 15) {
      highScores.length = 15;
    }
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }, [highScores]);

  return (
    <div id="TopScores">
      {highScores.length > 0
        ? highScores
            .sort((a, b) => b[1] - a[1])
            .map((score, index) => {
              return <p key={index}>{`${score[0]} - ${score[1]}`}</p>;
            })
            .slice(0, 15)
        : undefined}
    </div>
  );
};

export default TopScores;
