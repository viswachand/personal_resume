import "./App.css"; // Imports your CSS styles
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import HomeScreen from "./homeScreen"; // Imports the HomeScreen component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomeScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
