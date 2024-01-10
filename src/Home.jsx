// import React from "react";

import { useState } from "react";

// import Button from "./Button";

// const Home = () => {
//   return (
//     <div>
//       <h1> I am Rudra Nahawang Pandey.</h1>
//       <h2> I am a Student.</h2>
//       {/* <button style={{ backgroundColor: "red" }}>Register</button>
//       <button style={{ backgroundColor: "green" }}>Login</button> */}
//       <Button />
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  const [count, setCount] = useState(0); // [0, function]

  return (
    <div>
      <h1> {count}</h1>
      <button onClick={() => setCount(count + 1)}> Count</button>
    </div>
  );
};

export default Home;
