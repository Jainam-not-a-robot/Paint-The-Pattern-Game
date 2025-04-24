import React, { useEffect, useState, createContext, useContext } from "react";
import "./comp.css";
import { Player } from "./player";
import {ArrContext1, ArrProvider1} from './player'
import "@fontsource/press-start-2p"

// Create Context
export const ArrContext = createContext();

const ArrProvider = (props) => {
  const [arr2, setArr2] = useState(["", "", "", "", "", "", "", "", ""])
  const [clicks2,setclicks2]=useState(0)

  return (
    <ArrContext.Provider value={{ arr2, setArr2,clicks2,setclicks2}}>
      {props.children}
    </ArrContext.Provider>
  );
};

function Comp() {
  const {clicks2,setclicks2}=useContext(ArrContext)
  const [run, setRun] = useState(0);
  const [arrOfNumbers, setArrOfNumbers] = useState([""]);
  const colors = ["red", "yellow", "blue", "grey", "green", "pink"];
  const cells = [[0, 3, 6], [0, 1, 2], [1, 4, 7], [3, 4, 5], [2, 5, 8], [6, 7, 8]];

  // Use context
  const { arr2, setArr2 } = useContext(ArrContext);

  const colorFiller = (color, indexes) => {
    setArr2((currArr) =>
      currArr.map((item, i) => (indexes.includes(i) ? color : item))
    );
    setclicks2((prevclicks2) => prevclicks2 + 1);
  };

  useEffect(() => {
    if (clicks2 < 6) {
      let rand = Math.floor(Math.random() * 6);
      if (!arrOfNumbers.includes(rand)) {
        setArrOfNumbers((prevArr) => [...prevArr, rand]);
        colorFiller(colors[rand], cells[rand]);
      }
      setRun((prev) => prev + 1);
    }
  }, [run]);

  return (
    <div className="containerComp">
      <table className="flexComp comptd">
        <tbody>
          {/* <tr>
            <td className="noBorder"></td>
            <td className="red td" id="red1" role="button"></td>
            <td className="blue td" id="blue1" role="button"></td>
            <td className="green td" id="green1" role="button"></td>
          </tr> */}
          <tr>
            {/* <td className="yellow td" id="red2" role="button"></td> */}
            <td className={`${arr2[0]} td highlight`}></td>
            <td className={`${arr2[1]} td highlight`}></td>
            <td className={`${arr2[2]} td highlight`}></td>
          </tr>
          <tr>
            {/* <td className="grey td" id="blue2" role="button"></td> */}
            <td className={`${arr2[3]} td highlight`}></td>
            <td className={`${arr2[4]} td highlight`}></td>
            <td className={`${arr2[5]} td highlight`}></td>
          </tr>
          <tr>
            {/* <td className="pink td" id="green2" role="button"></td> */}
            <td className={`${arr2[6]} td highlight`}></td>
            <td className={`${arr2[7]} td highlight`}></td>
            <td className={`${arr2[8]} td highlight`}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Comp;
export { ArrProvider };
