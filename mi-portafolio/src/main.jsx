import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createMyTheme } from "./componests/createMyTheme.jsx";
import ColorModeToggle from "./componests/Theme/ColorModeToggle";

const MyApp = () => {
  const [isDark, setIsDark] = useState(true);
  const theme = createMyTheme(isDark);

  const handleToggleColorMode = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ColorModeToggle
          onToggle={handleToggleColorMode}
          isDark={isDark}
        />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
