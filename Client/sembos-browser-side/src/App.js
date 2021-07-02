import './App.css';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import React, { useEffect, useState } from 'react';
import getStats from './services/stats';
import Stat from './components/Stat';

function LoadingIndicator() {
  const { promiseInProgress } = usePromiseTracker();
  return ( promiseInProgress &&
    <div class="loadingio-spinner-rolling-kidtxnnktti">
      <div class="ldio-mc8h4xamq2">
        <div></div>
      </div>
    </div>
  );
}

function App() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    trackPromise(getStats().then(data => setStats(data)));
  }, []);

  return (
    <div className="App">
      <h1>List of stats retrieved from the server application</h1>
      {stats.map(stat => <Stat country={stat.country} average={stat.average} hotel1={stat.hotel1} hotel2={stat.hotel2} hotel3={stat.hotel3}></Stat>)}
      <LoadingIndicator />
    </div>
  );
}

export default App;
