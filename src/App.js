import React, { useState } from "react";

import NavBar from "./components/NavBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [category, setCategory] = useState("films");
  const [objects, setObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <NavBar
        category={category}
        handleClick={setCategory}
        handlePage={setPage}
      />
      <MainContent
        category={category}
        objects={objects}
        handleObjects={setObjects}
        isLoading={isLoading}
        handleLoading={setIsLoading}
        page={page}
        handlePage={setPage}
      />
      <Footer />
    </div>
  );
}

export default App;
