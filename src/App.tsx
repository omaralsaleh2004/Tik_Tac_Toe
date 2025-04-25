import { useEffect, useState } from "react";
import Cell from "./Components/Cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [2, 4, 6],
  [0, 4, 8],
];
function App() {
  const [cells, setCells] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [go, setGo] = useState("circle");
  const [winningMsg, setWinningMsg] = useState("");
  console.log(cells);

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");
      if (circleWins) {
        setWinningMsg("Circle Wins !");
      } else if (crossWins) {
        setWinningMsg("Cross Wins !");
      }
    });
  }, [cells, winningMsg]);
  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMsg) {
      setWinningMsg("Draw !");
    }
  }, [cells, winningMsg]);
   const handleReset = () => {
    if(cells.every((cell) => cell ==="circle" || cell ==="cross") || winningMsg) {
      cells.map(() => {
       setCells(["",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",]);
       setWinningMsg("");
       setGo("circle");
      })
    }
   }
  return (
    <>
      <div className="container">
        <div className="gameboard">
          {cells.map((cell, index) => {
            return (
              <Cell
                id={index}
                go={go}
                setGo={setGo}
                cells={cells}
                setCells={setCells}
                cell={cell}
                winningMsg={winningMsg}
              />
            );
          })}
        </div>
        <div className="turn">{!winningMsg && `It,s Now ${go} turn`}</div>
        <div className="win-div">{winningMsg}</div>
        {<button className={!winningMsg ? "none" : "btn"} onClick={handleReset}>Restart</button>}
      </div>
    </>
  );
}

export default App;
