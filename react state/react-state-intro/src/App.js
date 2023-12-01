import './App.css';
import {useState, useEffect} from 'react';
import UserTable from './components/pages/UserTable.jsx';

// function CounterVisualizer({value}) {
  
//   return <p>{value}</p>
// }
 
function App() {
  // const [counter, setCounter] = useState(0);
//   const [isEven, setIsEven] = useState(true);

//   useEffect(() => {
//     console.log('Mouted');
//   }, []);

//   useEffect(() => {
//     console.log("Update from counter");
//   },[counter, isEven]);

// function increment() {
//   setCounter((prev) => prev + 1);
//   // setCounter((prev) => prev + 1);
//   setIsEven(!!(counter % 2));
//   // console.log(counter);
// }
  return (
    <div className="App">
      {/* <CounterVisualizer value={counter} />
      <p>{isEven ? 'Even number' : 'Odd number'}</p>
      <button onClick={increment}>Add</button> */}
      <UserTable/>
    </div>
  );
}

export default App;
