import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [numberOfBlocks, setNumberOfBlocks] = useState(0);
  const [chessBoard, setChessBoard] = useState([]);

  const designBoard = () => {
    let chessArray = [];

    for (let i = 0; i < numberOfBlocks; i++) {
      let temporaryArray = [];
      for (let j = 0; j < numberOfBlocks; j++) {
        if ((i + j) % 2)
          temporaryArray.push(
            <div style={piece} className={`bg-black border-white`} />
          );
        else
          temporaryArray.push(
            <div style={piece} className={`bg-white border-black`} />
          );
      }
      chessArray.push(temporaryArray);
    }

    setChessBoard(chessArray);
  };

  useEffect(() => {
    designBoard();
  });

  const dynamicBox = {
    width: 100 * numberOfBlocks,
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
    boxShadow: `0px 10px 10px rgba(0,0,0,0.1)`,
  };

  const piece = {
    width: "100px",
    height: "100px",
    border: "1px solid",
  };

  return (
    <div className="h-full w-full container mx-auto p-16">
      <label>Enter dimensions (example: 4 for 4 x 4)</label>
      <input
        type="number"
        className="border-2 border-red-500"
        onChange={(e) => setNumberOfBlocks(e.target.value)}
      />
      <div style={dynamicBox}>{chessBoard}</div>
    </div>
  );
}

export default App;
