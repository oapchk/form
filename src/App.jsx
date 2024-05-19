import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Grid, CssBaseline } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Questionnaire from "./views/Questionnaire";
import { grey, teal, yellow } from "@mui/material/colors";
import "./App.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <Questionnaire />
      </Grid>
    </Grid>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ["Source Sans", "sans-serif"].join(","),
          h1: {
            fontFamily: ["Dancing Script", "cursive"].join(","),
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // light mode
                primary: teal,
                divider: teal[200],
                background: {
                  default: "#F9F9FB",
                  paper: "#FFF",
                },

                text: {
                  primary: grey[900],
                  secondary: grey[500],
                },
              }
            : {
                // dark mode
                primary: yellow,
                divider: yellow[700],
                background: {
                  default: "#2D3250",
                  paper: "#424769",
                },
                text: {
                  primary: grey[300],
                  secondary: grey[500],
                },
                error: {
                  main: "#c6ff00",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
