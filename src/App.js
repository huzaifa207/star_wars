import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [category, setCategory] = useState("films");
  const [objects, setObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <NavBar category={category} handleClick={setCategory} />
      <MainContent
        category={category}
        objects={objects}
        handleObjects={setObjects}
        isLoading={isLoading}
        handleLoading={setIsLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
