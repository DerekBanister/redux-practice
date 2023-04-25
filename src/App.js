import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  //allows us to dispatch actions
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLoggedIn ? <h3>Your Secrets</h3> : ''}

    </div>
  );
}

export default App;
