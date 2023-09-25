import React from "react";
import NaveBar from "./Components/NavBar/NaveBar";
import { action,originals, comedy } from "./urls";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NaveBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Actions" isSmall />
      <RowPost url={comedy} title="Comedy Movies" isSmall />
    </div>
  );
}

export default App;
