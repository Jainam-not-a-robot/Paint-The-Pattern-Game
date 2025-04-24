import React,{useContext, useEffect, useState,useRef,createContext} from 'react'
import './game.css'
import {ArrContext, ArrProvider} from './comp'
import "@fontsource/press-start-2p"
export const ArrContext1=createContext()
  // const ArrProvider1 = (props) => {
  //   const newbtn=useRef()
  //   return (
  //     <ArrContext.Provider value={{ arr, setArr,clicks2,setclicks2}}>
  //       {props.children}
  //     </ArrContext.Provider>
  //   );
  // };
function Player() {
  const {clicks2,setClicks2}=useContext(ArrContext)
  const {arr2,setArr2}=useContext(ArrContext)
  const [display,setDisplay]=useState("Try to match the computer's choice")
  const [clicks,setClicks]=useState(0)
  const [arr,setArr]=useState(["white","white","white","white","white","white","white","white","white"])
  const [clicked, setClicked] = useState({
    red1: false,
    yellow1: false,
    blue1: false,
    grey1: false,
    green1: false,
    pink1: false,
  });  
  const handleRefresh = () => {
    window.location.reload();
  };
  const resetfxn=()=>{
    setArr(["white", "white", "white", "white", "white", "white", "white", "white", "white"])
    setClicks(0)
    setClicked({red1: false,
      yellow1: false,
      blue1: false,
      grey1: false,
      green1: false,
      pink1: false})
    setDisplay("Try to match the computer's choice")
  }
  // const newfxn=()=>{
  //   resetfxn()
  //   setclicks2(0)
  // }
  const colorFiller = (color, indexes, i) => {
    if (!clicked[i]) {  // Ensure the action only happens once
      setArr((currArr) =>
        currArr.map((item, index) => (indexes.includes(index) ? color : item))
      );
      setClicks((prevClicks) => prevClicks + 1);
      setClicked((prevArr) => ({ ...prevArr, [i]: true })); // Update state after logic
    }
  };
  
  
    
  useEffect(()=>{
    if(clicks===6){
      if(JSON.stringify(arr)===JSON.stringify(arr2)){
        setDisplay(()=>"Congrats! You win")
        
      }
      else{
        setDisplay(()=>"Try again :(")
      }
      // resetScreen()
    }
  },[clicks])
  return (
    <div className="containerPlayer">
      <h2 className="block">{display}</h2><br></br>
    <table className="flexPlayer">
    <tbody>
      <span>
      <tr>
        <td className="noBorder "></td>
        <td className="red " i="red1" role="button" onClick={()=>colorFiller("red",[0,3,6],"red1")}></td>
        <td className="blue " i="blue1" role="button" onClick={()=>colorFiller("blue",[1,4,7],"blue1")}></td>
        <td className="green " i="green1" role="button" onClick={()=>colorFiller("green",[2,5,8],"green1")}></td>
      </tr>
      <tr>
        <td className="yellow " i="red2" role="button" onClick={()=>colorFiller("yellow",[0,1,2],"yellow1")}></td>
        <td className={arr[0]}></td>
        <td className={arr[1]}></td>
        <td className={arr[2]}></td>
      </tr>
      <tr>
        <td className="grey " i="blue2" role="button" onClick={()=>colorFiller("grey",[3,4,5],"grey1")}></td>
        <td className={arr[3]}></td>
        <td className={arr[4]}></td>
        <td className={arr[5]}></td>
      </tr>
      <tr>
        <td className="pink " i="green2" role="button" onClick={()=>colorFiller("pink",[6,7,8],"pink1")}></td>
        <td className={arr[6]}></td>
        <td className={arr[7]}></td>
        <td className={arr[8]}></td>
      </tr>
      </span>
    </tbody>
  </table>
  <span className="alignedCenter"><button className="resetbtn" onClick={resetfxn}>Reset</button><button className="resetbtn" onClick={handleRefresh}>Refresh</button></span>
  </div>
  )
}

export default Player
// export {ArrProvider1}