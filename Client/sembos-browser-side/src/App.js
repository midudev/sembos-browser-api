import './App.css';
import ListOfStats from './components/ListOfStats';
import { usePromiseTracker } from 'react-promise-tracker';

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
  return (
    <div className="App">
      <h1>List of stats retrieved from the server application</h1>
      <ListOfStats />
      <LoadingIndicator />
    </div>
  );
}

export default App;
