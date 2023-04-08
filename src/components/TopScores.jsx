const TopScores = ({ highScores }) => {
  return (
    <div>
      {highScores.length > 0
        ? highScores
            .sort((a, b) => b[1] - a[1])
            .map((score, index) => {
              return <p key={index}>{`${score[0]} - ${score[1]}`}</p>;
            })
        : undefined}
    </div>
  );
};

export default TopScores;
