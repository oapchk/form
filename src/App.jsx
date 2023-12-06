import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Grid, CssBaseline, Container, Typography } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./components/Texftield/texfield";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const InitialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
};

const formValidation = Yup.object().shape({
  firstName: Yup.string().required("Pole nie może być puste."),
  lastName: Yup.string().required("Pole nie może być puste."),
  email: Yup.string()
    .email("Błędny mail.")
    .required("Pole nie może być puste."),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Pole nie może być puste.k"),
});

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
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div spacing={8}>
            <Formik
              initialValues={{ ...InitialFormState }}
              validationSchema={formValidation}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>DETAILS</Typography>
                  </Grid>
                  <Grid items xs={6}>
                    <TextField name="firstName" label="Imię" />
                  </Grid>
                  <Grid items xs={6}>
                    <TextField name="lastName" label="Nazwisko" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>ADRES</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>INFO</Typography>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
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
