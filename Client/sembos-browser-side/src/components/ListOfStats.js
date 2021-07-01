import React, { useState, useEffect } from 'react';
import './ListOfStats.css';
import getStats from '../services/stats';
import Stat from './Stat';

function ListOfHotels() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        getStats()
        .then(data => setStats(data));
    }, [])
    
    return (
        <div>
            {stats.map(stat => <Stat country={stat.country} hotel1={stat.hotel1} hotel2={stat.hotel2} hotel3={stat.hotel3}></Stat>)}
        </div>
    )
}

export default ListOfHotels
