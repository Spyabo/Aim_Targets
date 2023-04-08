import { ReactComponent as ReactLogo } from "../svg/target.svg";

const Target = ({ values, onClick }) => {
  const { x, y, size } = values;

  return (
    <button
      className="target"
      type="button"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
    >
      <ReactLogo style={{ width: `${size}vb`, height: `${size}vb` }} />
    </button>
  );
};

export default Target;
