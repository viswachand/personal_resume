import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "rgb(8, 39, 99)",
      light: "#173b6c",
    },
    secondary: {
      main: "rgb(8, 39, 99)",
    },
    background: {
      text: "#272829",
      light: "#c4d9ef",
      verylight: "#eff5ff",
      gradient: "#c4d9ef",
    },
    body: {
      light: "#000000",
      helight: "#0f81b5",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "600",
      fontSize: "1.2rem",
    },
    h2: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: "bold",
      fontSize: "2rem",
    },
    h4: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "600",
      fontSize: "1.1rem",
    },
    h6: {
      fontFamily: '"Raleway", sans-serif;',
      fontWeight: 500,
      fontSize: "1.5rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.1rem",
      },
    },
    h7: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 500,
      fontSize: "1.25rem",
      [theme.breakpoints.down("sm")]: {
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
      textAlign: "justify",
      hyphens: "auto",
      wordSpacing: "0px",
      letterSpacing: "0.5px",
      lineHeight: 1.4,
      whiteSpace: "pre-wrap",
    },
    body2: {
      fontFamily: "'Open Sans', sans-serif",
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
          color: "transperent",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: "'Open Sans', sans-serif",
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "#000000",
          hyphens: "auto",
          wordSpacing: "0px",
          letterSpacing: "0.5px",
          "&:hover": {
            color: "rgb(8, 39, 99)",
          },
        },
        secondary: {
          fontSize: "0.875rem",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          // background: "linear-gradient(145deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2))",
          // color: "rgba(255,255,255,0.8)",
          // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2), inset 0 1px 3px rgba(255, 255, 255, 0.5)",
          // borderRadius: "50%",
          // // padding: "20px",
          // backdropFilter: "blur(10px)",
          // border: "1px solid rgba(255, 255, 255, 0.2)",
        },
      },
    },
  },
});

export default theme;
