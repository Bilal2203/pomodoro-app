import Logo from '../../assets/img/icon-white.png';
import ReportIcon from '../../assets/img/graph-white.png';
import SettingIcon from '../../assets/img/config-white';
import './Header.css';

export const Header = () => {
    return (
        <div className="container">
            <div className='parents'>
            <div className='pomofocus'>
                <img src={Logo} alt="" />
                <p className='pomofocust'>Pomofocus</p>
            </div>
                <div className='box'>
                    {/* <div className="report">
                        <img className='reporti' src={ReportIcon} alt="" />
                        <p className='reportt'>Report</p>
                    </div>
                    <button className='setting'>
                        <img className='settingi' src={SettingIcon} alt="" />
                        <button className='settingt'>Settings</button>
                    </button>
                     */}
                     <HeaderButton title='Report' icon={ReportIcon} />
                     <HeaderButton title='Setting' icon={SettingIcon} />
                </div>
            </div>
            <hr />
        </div>
    )
}