
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [count,setCount] = useState(0);

  const increasecount = () => {
    setCount(count+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked <span id="number">{count}</span> times</p>
        <button id="btn" onClick={increasecount}>Click Me</button>
    </div>
  )
}

export default App
