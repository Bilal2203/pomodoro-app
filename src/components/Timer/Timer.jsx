import { useDispatch } from "react-redux";
import "./Timer.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Start from "./Start/Start";

const Timer = () => {
  let theme = useSelector((state) => state.theme);

  let timesFromState = useSelector((state) => state.times);

  let [times, setTimes] = useState(25);
  let [second, setSecond] = useState(0);

  let [btnStatus, setBtnStatus] = useState(0);

  useEffect(() => {
    if (theme === "pomofocus") {
      setTimes(timesFromState.pomofocus);
    } else if (theme === "shortBreak") {
      setTimes(timesFromState.shortBreak);
    } else if (theme === "longBreak") {
      setTimes(timesFromState.longBreak);
    }
  }, [theme, timesFromState]);

  const [interv, setInterv] = useState();

  const start = () => {
    setBtnStatus(1);
    run();
    const intervalID = setInterval(run, 1000);
    setInterv(intervalID);
    setThemeChangeStatus(true);
  };

  const stop = () => {
    clearInterval(interv);
    setBtnStatus(0);
  };

  const reset = () => {
    clearInterval(interv);
    setBtnStatus(0);

    if (theme === "pomofocus") {
      setTimes(timesFromState.pomofocus);
      setSecond(0);
    } else if (theme === "shortBreak") {
      setTimes(timesFromState.shortBreak);
      setSecond(0);
    } else if (theme === "longBreak") {
      setTimes(timesFromState.longBreak);
      setSecond(0);
    }
  };

  const run = () => {
    if (times || second) {
      if (second === 0) {
        times--;
        second = 60;
      }
      second--;
      setSecond(second);
      setTimes(times);
    }
  };

  const [themeChangeStatus, setThemeChangeStatus] = useState(false);

  const ChangeeThemeToPomo = () => {
    if (!themeChangeStatus) {
      dispatch({ type: "CHANGE_THEME", theme: "pomofocus" });

      setSecond(0);
      clearInterval(interv);
      setBtnStatus(0);
    } else if (themeChangeStatus) {
      dispatch({ type: "NEXTMODAL_SETTING", nextModalStatus: "active" });
    }
  };
  const ChangeeThemeToShort = () => {
    if (!themeChangeStatus) {
      dispatch({ type: "CHANGE_THEME", theme: "shortBreak" });

      setSecond(0);
      clearInterval(interv);
      setBtnStatus(0);
    } else if (themeChangeStatus) {
      dispatch({ type: "NEXTMODAL_SETTING", nextModalStatus: true });
    }
  };
  const ChangeeThemeToLong = () => {
    if (!themeChangeStatus) {
      dispatch({ type: "CHANGE_THEME", theme: "longBreak" });

      setSecond(0);
      clearInterval(interv);
      setBtnStatus(0);
    } else if (themeChangeStatus) {
      dispatch({ type: "NEXTMODAL_SETTING", nextModalStatus: true });
    }
  };

  console.log(theme);
  const dispatch = useDispatch();

  return (
    <div className="timercontainer">
      <div className="timebox">
        <div className="timebuttons">
          <div
            onClick={ChangeeThemeToPomo}
            className={`color1 ${theme + "button1"}`}
          >
            Pomofocus
          </div>
          <div
            onClick={ChangeeThemeToShort}
            className={`color1 ${theme + "button2"}`}
          >
            Short Break
          </div>
          <div
            onClick={ChangeeThemeToLong}
            className={`color1 ${theme + "button3"}`}
          >
            Long Break
          </div>
        </div>
      </div>
      <div>
        <p className="timetext2">
          {times >= 10 ? times : "0" + times}:
          {second >= 10 ? second : "0" + second}
        </p>
      </div>
      <div className="btnstart">
        {btnStatus === 0 && (
          <Start
            theme={theme}
            reset={reset}
            status="start"
            title="START"
            onClick={start}
          />
        )}
        {btnStatus === 1 && (
          <Start
            theme={theme}
            reset={reset}
            status="stop"
            title="STOP"
            onClick={stop}
          />
        )}
      </div>
    </div>
  );
};

export default Timer;
