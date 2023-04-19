import "./index.scss";
import { useState } from "react";

function App() {

  let [count, setCount] = useState(0);

  const encriment = () => {
    if (count <= 10) {
      setCount((count -= 10));
    } else if (count <= 100) {
      setCount(count -= 100);
    }
   setCount(count -= 1);
  };
  const decriment = () => {
     if (count >= 10) {
       setCount(count += 10);
     } else if (count >= 100) {
       setCount(count += 100);
     }
     setCount(count += 1);
  };

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button
          className="minus"
          onClick={() => {
            encriment();
          }}
        >
          - Минус
        </button>
        <button
          className="plus"
          onClick={() => {
            decriment();
          }}
        >
          Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
