import React from "react";
import { useEffect, useState } from "react";

function App() {
  // create the count state.
  const [count, setCount] = useState(0);

  // update the count state every second 
  // This 'listens' for any updates to the DOM regarding this component
  // This will run every time the component is rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
// Clean up the timer whenever the component is re-rendered (unmounted - removed from the Dom and put back in)
// Whatever is returned from the callback inside of useEffect will perform any cleanup that needs to happen
    return () => {
      clearTimeout(timer);
    };
  });
  return <main>{count}
  {/* Todo: Add a form with one input and a submit button */}
  </main>;
}

export default App;
