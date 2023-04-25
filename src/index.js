import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore } from 'redux';

// DISPATCH THE ACTION TO THE REDUCER WHICH MODIFIES THE STORE



//ACTION = transforms state (increment/decrement, like/dislike) describe what you want to do
// function that returns an object

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER = checks which **action** then modifies **store**
const counter = (state = 0, action) => {

  // based on the name of the action (increment or decrement)
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }

}

//store = globalized state, accesible in every component
let store = legacy_createStore(counter);

// Display in console
store.subscribe(() => console.log(store.getState()))

//DISPATCH = calls the **action**
store.dispatch(increment());







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
