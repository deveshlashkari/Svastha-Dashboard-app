import "../styles/globals.css";

import {
  useTheme,
  createMuiTheme,
  MuiThemeProvider,
  ThemeProvider,
} from "@material-ui/core/styles";

import useDarkMode from "use-dark-mode";

const coreThemeObj = {
  typography: {
    fontFamily: [
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#e50914",
    },
    secondary: {
      main: "#0070f3",
    },
  },
};

export const darkTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.pallete,
    type: "dark",
  },
});

export const lightTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...coreThemeObj.pallete,
    type: "light",
  },
});

function MyApp({ Component, pageProps }) {
  const { value: isDark } = useDarkMode(false);
  const themeConfig = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeConfig}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
