import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import HomeScreen from "./homeScreen";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [config, setConfig] = useState(null);
  const isFetched = useRef(false);

  useEffect(() => {
    if (!isFetched.current) {
      const fetchConfig = async () => {
        try {
          const response = await fetch(
            "https://raw.githubusercontent.com/viswachand/myResumeData/refs/heads/main/Data.json"
          );
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
        {config ? (
          <HomeScreen config={config} />
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <CircularProgress color="primary" />
            <p
              style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#555" }}
            >
              Loading your personalized resume...
            </p>
          </Box>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
