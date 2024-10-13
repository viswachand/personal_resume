import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bc2",
      light: "#fafafa",
    },
    secondary: {
      main: "#0078bf",
    },
    background: {
      main: "#007bc2",
      light: "#c4d9ef",
      verylight: "#eff5ff",
    },
    body: {
      light: "#000000",
    },
  },

  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#0078bf",
      margin: "0px",
      textAlign: "justify",
      hyphens: "auto",
      wordSpacing: "2px",
    },
    h2: {
      fontFamily: "'Open Sans', sans-serif", // Use correct font name
      fontWeight: 700,
      fontSize: "1.3rem",
      color: "primary.main",
      margin: "0px",
      textAlign: "justify",
      hyphens: "auto",
      wordSpacing: "2px",
    },
    h3: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: "bold",
      fontSize: "1.1rem",
      color: "primary.light",
      textAlign: "justify",
      hyphens: "auto",
      wordSpacing: "0px",
    },
    h6: {
      fontFamily: '"Raleway", sans-serif;',
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    h7: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: "1.25rem",
      color: "#6c757d !important",
      opacity: "0.8",
      fontStyle: "italic",
    },
    body1: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 500,
      fontSize: "1rem",
      color: (theme) => theme.palette.secondary.main,
      textAlign: "justify",
      hyphens: "auto",
      wordSpacing: "0px",
      letterSpacing: "0.5px",
      whiteSpace: "pre-wrap",
    },
    body2: {
      fontFamily: '"Raleway", sans-serif;',
      fontWeight: "bold",
      fontSize: "1.5rem",
      color: "body.light",
      textAlign: "justify",
      hyphens: "auto",
      wordSpacing: "0px",
      letterSpacing: "0.5px",
      whiteSpace: "pre-wrap",
    },
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "40px",
          color: "transperent", // Custom min-width
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#fafafa",
          opacity: "0.9",
        },
        secondary: {
          fontSize: "0.875rem", // Override the font size for secondary text
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          // Customize this if needed
          // fontSize: '40px',
          // color: '#555',
        },
      },
    },
  },
});

export default theme;
