import React, { useState, useEffect, createContext } from "react";
import Styles from "./App.module.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationIcon from "@mui/icons-material/Navigation";

import Nav from "./Components/Main/Nav/Nav";

// Page Import Start
import Landing from "./Views/Landing/Landing";
import KnotsRopes from "./Views/Page-Sections/Knots-Ropes/KnotsRopes";
import Sails from "./Views/Page-Sections/Sails/Sails";
import HullStructure from "./Views/Page-Sections/Hull-Scructure/HullStructure";
import Manuevering from "./Views/Page-Sections/Manuevering/Manuevering";
// Page Import End


function App() {
  const [backToTop, setBackToTop] = useState(false);
  const themeContext = createContext(null);
  // const [theme, setTheme] = useState("LightMode")

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const toggleTheme = () => {
  //   setTheme((theme) => theme === "LightMode" ? "DarkMode" : "LightMode")
  // }

  return (
    <themeContext.Provider>
      <div className={`${Styles.App} ${Styles.LightMode}`}>
        <BrowserRouter>
          <Nav  />
          <Routes>
            <Route path={"/"} element={<Landing />} />
            <Route path={"KnotsRopes"} element={<KnotsRopes />} />
            <Route path={"Sails"} element={<Sails />} />
            <Route path={"HullStructure"} element={<HullStructure />} />
            <Route path={"Manuevering"} element={<Manuevering />} />
          </Routes>

          <NavigationIcon
            onClick={scrollUp}
            sx={{ fontSize: 30 }}
            className={`${Styles.Back_To_Top_Icon} ${
              backToTop ? Styles.Show_Back_To_Top : ""
            }`}
          />
        </BrowserRouter>
      </div>
    </themeContext.Provider>
  );
}

export default App;
