import React from 'react';
import './Nav.css'
import iconW from '../../../../src/assets/img/icon-white.png';
import report from '../../../assets/img/graph-white.png';
import settings from '../../../assets/img/config-white.png';


const Nav = () => {
    return (
        <div className="container">
            <div className='parents'>
            <div className='pomofocus'>
                <img src={iconW} alt="" />
                <p >Pomofocus</p>
            </div>
                <div className='box'>
                    <div className="report">
                        <img className='reporti' src={report} alt="" />
                        <p className='reportt'>Report</p>
                    </div>
                    <button className='setting'>
                        <img className='settingi' src={settings} alt="" />
                        <button className='settingt'>Settings</button>
                    </button>
                    
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Nav;
