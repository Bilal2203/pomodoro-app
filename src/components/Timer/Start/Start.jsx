import next from '../../../icons/Next.svg';
import "./Start.css";

const Start = ({ onClick, theme, title, status, reset }) => {
  return (
    <>
      <div className="startdiv">
        <button onClick={onClick} className={`startbutton ${theme} `}>
          {title}
        </button>
        {status === "stop" && (
          <img src={next} onClick={reset} className="iconnext" alt="icon" />
        )}
      </div>
    </>
  );
};

export default Start;
