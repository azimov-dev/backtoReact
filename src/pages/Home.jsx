import { useState } from "react";

const Home = () => {
const [count, setCount] = useState(0)

    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to My Website!</h1>
        <p>This is the home page of our React + Vite app.</p>
        <p>Click on the navigation links to explore more.</p>

        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={() => {setCount(count + 1)}}>+</button>
      </div>
    );
  };
  
  export default Home;
  