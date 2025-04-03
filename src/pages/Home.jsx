import { useState } from "react";
import { createContext } from "react";
import Counter from "../components/Counter";
export const Context = createContext();

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to My Website!</h1>
      <p>This is the home page of our React + Vite app.</p>
      <p>Click on the navigation links to explore more.</p>
      <Context.Provider value={{ count, setCount }}>
        <Counter />
      </Context.Provider>
    </div>
  );
};

export default Home;
