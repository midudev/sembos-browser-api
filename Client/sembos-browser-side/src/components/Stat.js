import React from 'react';
import './Stat.css';

function Flag({ country }) {
    if (country === 'it') {
        return <img class="stat-country-image" width="25px" height="25px" src="italyFlag.png" />
    } else if (country === 'fr') {
        return <img class="stat-country-image" width="25px" height="25px" src="franceFlag.png" />
    } else {
        return <img class="stat-country-image" width="25px" height="25px" src="spainFlag.png" />
    }
}

function Stat({ country, hotel1, hotel2, hotel3 }) {
    return (
        <div className="stat">
            <div className="stat-country">
                <Flag country={country} />
            </div>
        </div>
    )
}

export default Stat
