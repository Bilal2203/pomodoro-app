import React from 'react';
import './Timer.css';

const Timer = () => {
    return (
        <div className='containert'>
            <div className='boxt'>
                <button  className='btn3' > Pomofocus</button>
                <button className='btn3'>Short Break</button>
                <button className='btn3'>Long Break</button>
            </div>
            <div className='time'>25:00</div>
            <div className='box'>
                <button className='stopc'> <p className='stop'>START</p> </button>
                <p className='play'><i class="fas fa-play"></i></p>
            </div> 
            
        </div>
    )
}

export default Timer;
