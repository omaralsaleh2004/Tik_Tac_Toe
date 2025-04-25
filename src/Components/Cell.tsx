import { Dispatch } from "react";

interface Props {
  id: number;
  go: string;
  setGo: Dispatch<React.SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<React.SetStateAction<string[]>>;
  cell: string;
  winningMsg: string;
}

const Cell = ({ id, cells, setCells, go, setGo, cell, winningMsg }: Props) => {
  const handleClick = () => {
    if (winningMsg) {
      return;
    }
    const notTaken = !cells[id];
    if (notTaken) {
      if (go === "circle") {
        handleChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleChange("cross");
        setGo("circle");
      }
    }
  };
  const handleChange = (cellToChange: string) => {
    const copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  return (
    <div className="square" onClick={handleClick}>
      <div className={cell === "circle" ? "circle" : "cross"}>
        {cell ? (cell === "circle" ? "O" : "X") : ""}
      </div>
    </div>
  );
};

export default Cell;
