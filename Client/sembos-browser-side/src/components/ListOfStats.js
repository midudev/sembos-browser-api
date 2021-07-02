import React, { useState, useEffect } from 'react';
import getStats from '../services/stats';
import Stat from './Stat';
import { trackPromise } from 'react-promise-tracker';

function ListOfStats() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        trackPromise(getStats().then(data => setStats(data)));
    }, []);
    
    return (
        <div className="listOfStats">
            {stats.map(stat => <Stat country={stat.country} hotel1={stat.hotel1} hotel2={stat.hotel2} hotel3={stat.hotel3}></Stat>)}
        </div>
    )
}

export default ListOfStats;
