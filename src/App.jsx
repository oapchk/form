import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Grid, CssBaseline, Container, Typography } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "./components/Texftield/texfield";
import Select from "./components/Select/Select";
import voivodeship from "./data/voivodeship.json";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/ButtonWrapper";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const InitialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  voivodeship: "",
  postalCode: "",
  address1: "",
  address2: "",
  address3: "",
  city: "",
  message: "",
  termsOfService: "false",
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
    .required("Pole nie może być puste."),
  address1: Yup.string().required("Required"),
  address2: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Pole nie może być puste."),
  address3: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number"),
  city: Yup.string().required("Required"),
  voivodeship: Yup.string().required("Required"),
  postalCode: Yup.number().integer().required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
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
                  <Typography>TWOJE DANE</Typography>
                </Grid>
                <Grid items xs={6}>
                  <TextField name="firstName" label="Imię" />
                </Grid>
                <Grid items xs={6}>
                  <TextField name="lastName" label="Nazwisko" />
                </Grid>
                <Grid items xs={12}>
                  <TextField name="email" label="E-mail" />
                </Grid>
                <Grid items xs={12}>
                  <TextField name="phone" label="Telefon" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>ADRES</Typography>
                </Grid>
                <Grid items xs={12}>
                  <Select
                    name="voivodeship"
                    label="Województwo"
                    options={voivodeship}
                  />
                </Grid>
                <Grid items xs={6}>
                  <TextField name="postalCode" label="Kod pocztowy" />
                </Grid>
                <Grid items xs={6}>
                  <TextField name="city" label="Miejscowość" />
                </Grid>
                <Grid items xs={12}>
                  <TextField name="address1" label="Ulica" />
                </Grid>
                <Grid items xs={6}>
                  <TextField name="address2" label="Numer domu" />
                </Grid>
                <Grid items xs={6}>
                  <TextField name="address3" label="Numer mieszkania" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>INFO</Typography>
                </Grid>
                <Grid items xs={12}>
                  <TextField
                    name="message"
                    label="Tutaj możesz dodać komentarz."
                    multiline={true}
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Checkbox
                    name="termsOfService"
                    legend="something something"
                    label="Wyrażam zgodę"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button>Wyślij</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
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
