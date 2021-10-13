import { useSelector } from "react-redux";
import "./Next.css";

const Next = () => {
  const nextModalStatus = useSelector((state) => state.nextModalStatus);
  console.log(nextModalStatus);

  return (
    <div
      className={
        nextModalStatus === "inactive"
          ? "nextM"
          : nextModalStatus === "active"
          ? "nextM active"
          : "nextM"
      }
    >
      <div className="mdiv">
        <p className="textR">Подтвердите действие на странице pomofocuse.io</p>
        <p className="textE">
          The timer is still running, are you sure you want to switch?
        </p>
        <div className="nextB">
          <button className="nextOK">ОК</button>
          <button className="nextCancel">Отмена</button>
        </div>
      </div>
    </div>
  );
};

export default Next;
