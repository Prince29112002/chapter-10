// CounterApp.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter, resetCounter } from './actions';

const CounterApp = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Counter Value: {counter}</p>
      <button onClick={() => dispatch(increaseCounter())}>Increase</button>
      <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
};

export default CounterApp;
