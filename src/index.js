import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore } from 'redux';
import reducerGod from './reducers';
//connects store to entire app
import { Provider } from 'react-redux';

//state shows in redux tab of chrome dev tools due to redux-devtools-extension
const store = legacy_createStore(reducerGod, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const root = ReactDOM.createRoot(document.getElementById('root'));
//passing store into provider component
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



// import { legacy_createStore } from 'redux';

// // ACTION = transforms state (increment/decrement, like/dislike) describe what you want to do
// const increment = () => {
//   // function that returns an object
//   return {
//     type: 'INCREMENT'
//   }
// }

// const decrement = () => {
//   // function that returns an object
//   return {
//     type: 'DECREMENT'
//   }
// }

// // REDUCER = checks which **action** then modifies **store**
// const counter = (state = 0, action) => {
//   // based on the name of the action (increment or decrement)
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }

// }
// // STORE = globalized state, accesible in every component
// let store = legacy_createStore(counter);

// // Display in console
// store.subscribe(() => console.log(store.getState()))

// //DISPATCH THE ACTION TO THE REDUCER WHICH MODIFIES THE STORE
// //DISPATCH = calls the **action**
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());

