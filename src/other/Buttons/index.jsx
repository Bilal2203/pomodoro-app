import { useState } from "react";
import './index.css';

export const Buttons = () => {
    const [theme, setTheme] = useState('pomodoro');

    const buttonsChange = (otherButton) => {
        setTheme(otherButton)
    }

    const backgroundClassName = 'theme--pomodoro'
    return (
        <div className={`pomodoro--${theme}`}>
            <div className=''>
                <Link to='/' onClick={() => buttonsChange('pomodoro')}> <button className='pomofocust'>Pomofocus</button> </Link>
                <Link to='/shortbreak' onClick={() => buttonsChange('short-break')}> <button className='pomofocust'>Pomofocus</button> </Link>
                <Link to='/longbreak' onClick={() => buttonsChange('long-break')}> <button className='pomofocust'>Pomofocus</button> </Link>
            </div>
        </div>
    )
}