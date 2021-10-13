import "./Setting.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import closeIcon from '../../icons/Close.svg';
import turnOff from '../../icons/turnoff.svg';
import turnOn from '../../icons/turnon.svg'
import { useState } from "react";

const Setting = () => {
  const modalStatus = useSelector((state) => state.modalStatus);
  const settingsValue = useSelector((state) => state.settingsModal);
  const timesValue = useSelector((state) => state.times);

  const [pomodoraInput, setPomodoraInput] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [ASPomodoro, setASPomodoro] = useState(true);
  const [ASBreaks, setASBreaks] = useState(false);
  const [LBInterval, setLBInterval] = useState(4);
  console.log(settingsValue);
  console.log(timesValue);

  const dispatch = useDispatch();

  const modalStatusChanger2 = () => {
    dispatch({ type: "MODAL_SETTING", modalStatus: true });
  };

  const resetSettingsValues = () => {
    setPomodoraInput(timesValue.pomofocus);
    setShortBreak(timesValue.shortBreak);
    setLongBreak(timesValue.longBreak);
    setLBInterval(settingsValue.longBreakInterval);
  };

  const disableModal = () => {
    resetSettingsValues();
    dispatch({ type: "MODAL_SETTING", modalStatus: true });
  };

  const getPomodoraValue = (e) => {
    setPomodoraInput(e.target.value);
  };
  const getShortBreakValue = (e) => {
    setShortBreak(e.target.value);
  };
  const getLongBreakValue = (e) => {
    setLongBreak(e.target.value);
  };
  const changerAutoStartPomoValue = () => {
    if (ASPomodoro) {
      setASPomodoro(false);
    } else if (!ASPomodoro) {
      setASPomodoro(true);
    }
  };
  const changerAutoStartBreaksValue = () => {
    if (ASBreaks) {
      setASBreaks(false);
    } else if (!ASBreaks) {
      setASBreaks(true);
    }
  };
  const getLongBreakIntervalValue = (e) => {
    setLBInterval(e.target.value);
  };

  const stateValueChanger = () => {
    dispatch({
      type: "CHANGE_SOME_SETTING",
      settingsModal: {
        longBreakInterval: LBInterval,
        autoStartPomodoros: ASPomodoro,
        autoStartBreaks: ASBreaks,
      },
    });
    dispatch({
      type: "CHANGE_TIMES",
      times: {
        pomofocus: pomodoraInput,
        shortBreak: shortBreak,
        longBreak: longBreak,
      },
    });

    disableModal();
  };

  return (
    <div
      onClick={modalStatusChanger2}
      className={modalStatus ? "m" : "m active"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={modalStatus ? "m_content" : "m_content active"}
      >
        <div className="TS">
          <div className="TS_t">TIMER SETTING</div>
          <div>
            {" "}
            <img onClick={disableModal} src={closeIcon} />{" "}
          </div>
        </div>

        <hr />

        <p className="t-min">Timer (minutes)</p>

        <div className="box-P_SH_L">
          <div>
            <div className="Theme">Pomodoro</div>
            <input
              className="Inputs"
              onChange={getPomodoraValue}
              type="number"
              value={pomodoraInput}
            />
          </div>
          <div>
            <div className="Theme">Short Break</div>
            <input
              className="Inputs"
              onChange={getShortBreakValue}
              type="number"
              value={shortBreak}
            />
          </div>
          <div>
            <div className="Theme">Long Break</div>
            <input
              className="Inputs"
              onChange={getLongBreakValue}
              type="number"
              value={longBreak}
            />
          </div>
        </div>

        <hr />

        <div>
          <div className="A_S-three">
            <p className="theme-q">Auto start Breaks?</p>
            <div className="turn">
              <img
                onClick={changerAutoStartPomoValue}
                src={ASPomodoro ? turnOn : turnOff}
                alt="icon"
              />
            </div>
          </div>

          <hr />

          <div className="A_S-three">
            <p className="theme-q">Auto start Pomodoros?</p>
            <div className="turn">
              <img
                onClick={changerAutoStartBreaksValue}
                src={ASBreaks ? turnOn : turnOff}
                alt="icon"
              />
            </div>
          </div>
          <hr />
          <div className="A_S-three">
            <p className="theme-q">Long Break interval</p>
            <input
              className="write"
              onChange={getLongBreakIntervalValue}
              type="number"
              value={LBInterval}
            />
          </div>
          <button className="OK" onClick={stateValueChanger}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;