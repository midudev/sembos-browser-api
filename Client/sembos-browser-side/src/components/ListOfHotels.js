import React, { useState, useEffect } from 'react';
import './ListOfHotels.css';
import getStats from '../services/stats';
import Hotel from './Hotel';

function ListOfHotels() {
    const [stats, setStats] = useState([]);
    useEffect(() => {
        getStats()
        .then(stats => setStats(stats));
    }, []);

    return (
        <div>
            List of hotels
        </div>
    )
}

export default ListOfHotels
