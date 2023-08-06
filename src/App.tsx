import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperClock} from './SuperClock/SuperClock';

function App() {
    const [date, setDate] = useState(new Date())

    useEffect(()=> {
        const intervalId = setInterval(()=> {
            setDate(new Date());
        },1000)
        return () => {
            clearInterval(intervalId)
        }
    },[])
    return (
        <div className="App">
            <h1><b>Small React App 'CLOCK'</b></h1>
            <SuperClock date={date}/>
        </div>
    );
}

export default App;
