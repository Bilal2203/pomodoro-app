import React from 'react';
import './Text.css';


const Text = () => {
    return (
        <div>
            <p className='textfirst'>An online Pomodoro Timer to boost your productivity</p>
            <p className='texttheme1'>What is Pomofocus?</p>
            <hr className='hr1'/>
            <p className='text1'>Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.</p>

            <p className='texttheme2'>What is Pomodoro Technique?</p>
            <hr className='hr2' />
            <p className='text2'>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - Wikipedia</p>

            <p className='texttheme3'>How to use the Pomodoro Timer?</p>
            <hr className='hr3' />
            <ol>
                <li><b>Add tasks </b> to work on today</li>
                <li> <b>Set estimate pomodoros</b> (1 = 25min of work) for each tasks</li>
                <li> <b>Select a task</b> to work on</li>
                <li> <b>Start timer</b> and focus on the task for 25 minutes</li>
                <li> <b>Take a break</b> for 5 minutes when the alarm ring</li>
                <li> <b>Add tasks</b> to work on today</li>
            </ol>

            <p className='texttheme4'>Features</p>
            <hr className='hr4' />
            <ul>
                <li> <b>Responsive design</b> that works with desktop and mobile</li>
                <li> <b>Color transition</b> to switch moods between work time and rest time</li>
                <li> <b>Audio notification </b> at the end of a timer period</li>
                <li> <b>Customizable timer </b> intervals to suit your preference</li>
            </ul>

            <p className='texttheme4'>Download App</p>
            <hr className='hr4' />
            <ul className='ul'>
                <li>For macOS <span>(zip file)</span> </li>
                <li>For Windows <span>(zip file)</span> </li>
            </ul>
            <hr className='lasthr' />

            <div className='links'>
                <a href='#'>HOME</a>
                <a href='#'>PRIVACY</a>
                <a href='#'>CONTACT</a>
                <a href='#'>SIMPLE VERSION</a>
            </div>
            <p className='made'>Made with by <span className='bilu'>BILAL</span> </p>
            <p className='pomo'>©Pomofocus 2021. All Rights Reserved.</p>

        </div>
    )
}

export default Text;
