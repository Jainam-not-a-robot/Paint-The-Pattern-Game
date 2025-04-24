import React from "react";
import WrappedComp from "./comp"; // comp.js now exports WrappedComp (with ArrProvider)
import Player from "./player";
import { ArrProvider } from "./comp"; // Import ArrProvider
import "@fontsource/press-start-2p"

function App() {
  return (
    <ArrProvider>
      <div>
        <WrappedComp />
        <Player />
      </div>
    </ArrProvider>
  );
}

export default App;
