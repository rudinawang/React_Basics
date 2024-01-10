import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // TYPE 1 of UseEffect on the basis of execution
  //   useEffect(() => {
  //     // api batw data lyauxa
  //     console.log("Hello World");
  //   }, []);

  // TYPE 2 of UseEffect on thee basis of execution
  //   useEffect(() => {
  //     document.title = count;
  //     console.log("useEffect Triggered");
  //   }, [count, count2]);

  // TYPE 3 of UseEffect on the basis of execution

  //   useEffect(() => {
  //     console.log("UseEffect Triggered");
  //   });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>Count: {count2}</h1>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
    </div>
  );
};

export default UseEffect;
