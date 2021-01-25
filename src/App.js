import React, {useState} from "react";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Banana");
  const [age, setAge] = useState(0);

  const handleClik =() => {
    setCount(count + 1);
    console.log(count);
  }

  const handleText = () => {
      console.log(text);
      setText("Jesper!");
      console.log(text);
  }

  const handleRandomAge = () => {
      const ageNew = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
      setAge(ageNew);
      console.log(ageNew);
  }

  return (
    <div>
        Antal klik {count}
        <button onClick={handleClik}>
            Klik
        </button>
        <hr/>
        Hej med dig {text}
        <button onClick={handleText}>
            Angiv tekst!
        </button>
        <hr/>
        Din alder er: {age}
        <button onClick={handleRandomAge}>
            Angiv random alder
        </button>
    </div>
  );
}

export default App;
