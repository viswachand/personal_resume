import { createTheme } from "@mui/material/styles";

let theme = createTheme({
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
})

theme = createTheme(theme, {
  
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      [theme.breakpoints.down('sm')]: {
        fontSize: "1.5rem",
      },
      color: "#0078bf",
      hyphens: "auto",
      wordSpacing: "2px",
      whiteSpace: "nowrap",
    },
    h2: {
      fontFamily: '"Raleway", sans-serif;',
      fontWeight: "bold",
      fontSize: "1.4rem",
      color: "body.light",
    },
    h3: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: "bold",
      fontSize: "1.1rem",
      [theme.breakpoints.down('sm')]: {
        fontSize: "1rem",
      },
      color: "primary.light",
    },
    h6: {
      fontFamily: '"Raleway", sans-serif;',
      fontWeight: 500,
      fontSize: "1.5rem",
      [theme.breakpoints.down('sm')]: {
        fontSize: "1.1rem",
      },
    },
    h7: {
      fontFamily: '"Raleway", sans-serif',
      fontSize: "1.25rem",
      [theme.breakpoints.down('sm')]: {
        fontSize: "1rem",
      },
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
      fontFamily: "'Open Sans', sans-serif", // Use correct font name
      fontWeight: 700,
      fontSize: "1.3rem",
      color: "primary.main",
      margin: "0px",
      textAlign: "justify",
      hyphens: "auto",
      wordSpacing: "2px",
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
          hyphens: "auto",
          wordSpacing: "0px",
          letterSpacing: "0.5px",
          // whiteSpace: "nowrap",
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
