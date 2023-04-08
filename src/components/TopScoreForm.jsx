const TopScoreForm = ({ score, name, setName, setHighscore }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setHighscore((currentScores) => {
      return [...currentScores, [name, score]];
    });
  };

  return (
    <form className="Username-form" onSubmit={handleSubmit}>
      <input
        type="input"
        autoComplete="off"
        className="Input-name"
        id="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="name" className="Username">
        Username:
      </label>
    </form>
  );
};

export default TopScoreForm;
