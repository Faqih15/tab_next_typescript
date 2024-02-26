'use client'
import React, { useState, useEffect, useCallback } from "react";

function ChildComponent({ onClick }: any): void {
  return 
    <button 
      className="bg-yellow-300 hover:bg-yellow-400  text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      onClick={onClick}>
        Click me
    </button>;
} 

// export default ChildComponent;

function TestAppModal() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // This is the dependency array

  useEffect(() => {
    console.log("Count changed!");
  }, [count]);

  return (
    <div>
      <center>
        <h1 style={{ color: "green" }}>Geeks for Geeks</h1>
        <h3>How to avoid infinite loop when using useEffect hook in React</h3>
      </center>
      <h1>Count: {count}</h1>
      <ChildComponent onClick={handleClick} />
      <button 
        className="bg-yellow-300 hover:bg-yellow-400  text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={() => setCount(count - 1)}>
          Click me
      </button>
      <button className="bg-blue-600 hover:bg-blue-700  text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={() => setCount(count + 1)}>
        Increment count
      </button>
    </div>
  );
}

export default TestAppModal; ChildComponent;
