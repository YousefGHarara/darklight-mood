import { createContext, useContext, useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp/signUp";

export const themeCreateContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  return (
    <themeCreateContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <div className="theme" onClick={toggleTheme}>
          <i className="fa-solid fa-moon moon"></i>
          <i class="fa-solid fa-sun sun"></i>
        </div>
        <SignUp/>
      </div>
    </themeCreateContext.Provider>
  );
}

export default App;
