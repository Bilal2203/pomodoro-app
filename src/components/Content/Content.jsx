import "./Content.css";
import Header from "../Header/Header";
import Report from "../../icons/Report.svg";
import Settings from '../../icons/Settings.svg';
import { useDispatch } from "react-redux";
import Setting from "../Setting/Setting";

const Content = () => {
  const dispatch = useDispatch();
  const modalStatusChanger = () => {
    dispatch({ type: "MODAL_SETTING", modalStatus: false });
  };

  return (
    <div className='box1'>
      <div className="box">
        <p className="pomofocusT">Pomofocus</p>
        <div className="btns">
          <Header name="Report" icon={Report} />
          <Header modalstatus={modalStatusChanger} name='Setting' icon={Settings}/>
          {/* <button onClick={modalStatusChanger} className='set'>
            <img src={Settings} /> 
                <p className='settings'>Settings</p>
          </button> */}
        </div>
      </div>
      <hr className="hr"/>
    </div>
  );
};

export default Content;
