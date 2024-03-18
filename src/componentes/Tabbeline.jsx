import { useState } from "react";

const Tabbeline = ({ onChange }) => {
  const [num, setNum] = useState(0);

  const newNum = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = () => {
    event.preventDefault();
    onChange(num);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={num}
          type="number"
          id="number"
          onChange={newNum}
          min="0"
          max="10"
        />
      </form>
    </>
  );
};

export default Tabbeline;
