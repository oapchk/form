import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Grid, CssBaseline } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Questionnaire from "./views/Questionnaire";
import { green, grey, orange, red } from "@mui/material/colors";

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
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // light mode
                primary: green,
                divider: green[200],
                background: {
                  default: "#f6f6f6",
                  paper: "#F0F3FF",
                },

                text: {
                  primary: green[900],
                  secondary: green[800],
                },
              }
            : {
                // dark mode
                primary: orange,
                divider: orange[700],
                background: {
                  default: "#2D3250",
                  paper: "#424769",
                },
                text: {
                  primary: "#EEEEEE",
                  secondary: grey[500],
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
