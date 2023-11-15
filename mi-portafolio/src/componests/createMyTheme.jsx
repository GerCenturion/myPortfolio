import { createTheme } from "@mui/material/styles";

export const createMyTheme = (isDark) => {
  console.log("isDark:", isDark);
  return createTheme({
    palette: {
      mode: isDark ? "dark" : "light",

      primary: {
        main: "#009688",
        light: "#33ab9f",
        dark: "#00695f",
        contrastText: "#fff",
      },
      secondary: {
        main: "#4d4d4d",
        light: "#212121",
        dark: "#171717",
        contrastText: "#fff",
      },
    },
  });
};
