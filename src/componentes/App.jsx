import { useState } from "react";
import Tabbeline from "./Tabbeline";
import Multiplicazioni from "./Multiplicazioni";
function App() {
  const [num, setNum] = useState(0);

  const handleSetNum = (numero) => {
    setNum(numero);
  };
  return (
    <div className="head">
      <Tabbeline onChange={handleSetNum} />
      <Multiplicazioni numero={num} />
    </div>
  );
}

export default App;
