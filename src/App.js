import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
  };
  
  const DecNum = () => {
    setCount(count - 1);
  };
  
  return (
    <>
      <h1> { count } </h1>
      <button onClick={IncNum}>Increment</button>
      <button onClick={DecNum}>Decrement</button>
    </>
  );
}

export default App;
