import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Home from "./pages/Home";
import Other from "./pages/Other";
import Another from "./pages/Another";
import { useAppStyles } from "./styles";

export const GlobalContext = React.createContext(null);

export const App = (props) => {
  //GLOBAL STATE PROVIDED BY GLOBAL CONTEXT
  const [Global, setGlobal] = React.useState({});

  const style = useAppStyles();

  return (
    <GlobalContext.Provider value={{ Global, setGlobal }}>
      <Header />
      <h1 className={style.h1}>Hello World</h1>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/other" element={<Other/>} />
        <Route exact path="/another" element={<Another/>} />
      </Routes>
      <Footer />
    </GlobalContext.Provider>
  );
};
