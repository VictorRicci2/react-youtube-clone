// react hooks
import { useState } from "react";
// material ui config
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
// components
import Home from "./Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",

      primary: {
        main: "#f44336",
      },

      secondary: {
        main: "#3ea6ff",
      },

      background: {
        default: darkMode ? "#232323" : "#fff",
        dark: darkMode ? "#181818" : "#f4f6f8",
        paper: darkMode ? "#232323" : "#fff",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}
