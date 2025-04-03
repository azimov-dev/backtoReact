import { useContext } from "react";
import { Context } from "../pages/Home";

function Counter() {
  const { count, setCount } = useContext(Context);

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
