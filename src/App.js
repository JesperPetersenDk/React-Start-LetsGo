import React, {useState} from "react";
function App() {
  const [count, setCount] = useState(0);

  const handleClik =() => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div>
      Antal klik {count}
      <button onClick={handleClik}>
        Klik
      </button>
    </div>
  );
}

export default App;
