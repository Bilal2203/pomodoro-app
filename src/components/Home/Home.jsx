import React from 'react';
import './Home.css';
import Nav from './Nav/Nav';
import Text from './Text/Text';
import Timer from './Timer/Timer';

const Home = () => {
    return (
        <div className='div1'>
            <Nav />
            <Timer />
            <Text />
            
        </div>
    )
}

export default Home;
