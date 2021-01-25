import React, {useState} from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Antal klik {count}
      <button onClick={() => setCount(count + 1)}>
        Klik
      </button>
    </div>
  );
}

export default App;
