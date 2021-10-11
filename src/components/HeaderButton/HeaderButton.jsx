import React from 'react';
import './HeaderButton.css';

const HeaderButton = ({icon, title, onClick}) => {
    return (
        <button onClick={onClick} className='headerButton'>
            <img src={icon} alt="" className='buttonIcon' />
            <div className='buttonTitle'>{title}</div>
        </button>
    )
}

export default HeaderButton;