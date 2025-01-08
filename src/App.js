import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import HomeScreen from "./homeScreen";

function App() {
  const [config, setConfig] = useState(null);
  const isFetched = useRef(false); 

  useEffect(() => {
 

    if (!isFetched.current) {
      const fetchConfig = async () => {
        try {
          const response = await fetch("https://raw.githubusercontent.com/viswachand/myResumeData/refs/heads/main/Data.json");
          const jsonData = await response.json();
          setConfig(jsonData);
          isFetched.current = true; 
        } catch (error) {
          console.error("Error fetching config:", error);
        }
      };

      fetchConfig();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {config ? <HomeScreen config={config} /> : <p>Loading...</p>}
      </div>
    </ThemeProvider>
  );
}

export default App;
