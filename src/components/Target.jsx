import useSound from "use-sound";
import { ReactComponent as TargetSVG } from "../svg/target.svg";
import hitSound from "../wav/hit.wav";

const Target = ({ values, onClick }) => {
  const { x, y, size } = values;

  const [playHit] = useSound(hitSound, { volume: 0.05 });

  return (
    <button
      className="target"
      type="button"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
      onMouseDown={() => playHit()}
    >
      <TargetSVG style={{ width: `${size}vb`, height: `${size}vb` }} />
    </button>
  );
};

export default Target;
