import { useState } from "react";

const TopScoreForm = ({ score, setHighscore }) => {
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (toggle) {
      setToggle(false);
      setHighscore((currentScores) => {
        return [...currentScores, [name, score]];
      });
    }
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
