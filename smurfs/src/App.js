import React from "react";
import "./styles/App.css";
import { SmurfsContextProvider } from "./contexts/smurf.contexts";

import NewSmurf from "./components/NewSmurf";
import Village from "./components/Village";

const App = () => (
  <div className="App">
    <SmurfsContextProvider>
      <Village />
      <NewSmurf />
    </SmurfsContextProvider>
  </div>
);

export default App;
