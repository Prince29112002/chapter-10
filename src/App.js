import React from "react";
import { Provider } from 'react-redux';
import store from "./Taska/store";
import CounterApp from "./Taskb/CounterApp";

function App() {
  return (
    <>
    <Provider store={store}>
        <CounterApp />
    </Provider>
    </>
  );
}

export default App;
