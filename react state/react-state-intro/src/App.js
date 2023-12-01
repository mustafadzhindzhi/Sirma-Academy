import './App.css';
import {useState} from 'react';

function CounterVisualizer({value}) {
  return <p>{value}</p>
}
 
function App() {

  const [serverData, setServerData] = useState([]);
  const displayData = serverData.filter((data) => !data);

  const [counter, setCounter] = useState(0);
  const isEven = !(counter % 2)
  // const [isEven, setIsEven] = useState(true);

function increment() {
  setCounter((prev) => prev + 1);
  // setCounter((prev) => prev + 1);
  // setIsEven(!!(counter % 2));
  // console.log(counter);
}
  return (
    <div className="App">
      <CounterVisualizer value={counter} />
      <p>{isEven ? 'Even number' : 'Odd number'}</p>
      <button onClick={increment}>Add</button>
    </div>
  );
}

export default App;
