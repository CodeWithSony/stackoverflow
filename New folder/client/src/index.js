import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const store = createStore(Reducers, compose(applyMiddleware(thunk)))
// https://redux.js.org/api/applymiddleware
// Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's dispatch method for fun and profit. The key feature of middleware is that it is composable. Multiple middleware can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.

// The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like Rx. It does so by letting you dispatch async actions in addition to normal actions.

// For example, redux-thunk lets the action creators invert control by dispatching functions. They would receive dispatch as an argument and may call it asynchronously. Such functions are called thunks. Another example of middleware is redux-promise. It lets you dispatch a Promise async action, and dispatches a normal action when the Promise resolves.


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

{/* what we will do after dispatching data to redux (we are sending data to the redux store) and and storing inside redux store. oh harry told me then we can use that data from outer folders also right??????????? nd we can avoid sending props to parent folder to child folder something like that he was saying ?????*/}

{/* related to outer folder */}

    {/* Not outer folders 
From other components also you can access the state and it is because you have wrapped your complete app using a provider in index js */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  // document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// 1:1:36
