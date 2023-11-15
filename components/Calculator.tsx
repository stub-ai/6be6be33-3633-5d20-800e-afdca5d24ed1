import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-64">
        <input
          type="text"
          value={input}
          disabled
          className="w-full p-2 text-right border-2 border-gray-200 rounded-md"
        />
        <p className="text-right">{result}</p>
      </div>
      <div className="grid grid-cols-4 gap-2 w-64">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((value, index) => (
          <button
            key={index}
            onClick={() => (value === "=" ? calculate() : handleClick(value))}
            className="p-2 text-white bg-blue-500 rounded-md"
          >
            {value}
          </button>
        ))}
        <button onClick={clearInput} className="col-span-2 p-2 text-white bg-red-500 rounded-md">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;