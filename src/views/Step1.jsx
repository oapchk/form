// import * as React from "react";
import { Grid, Container, Typography } from "@mui/material";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import TextField from "../components/Texftield/texfield";
import Select from "../components/Select/Select";
import voivodeship from "../data/voivodeship.json";
import Checkbox from "../components/Checkbox/Checkbox";
import Button from "../components/Button/ButtonWrapper";

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
  firstName: Yup.string()
    .min(2, "Imię powinno być dłuższe niż 2 litery")
    .max(50, "Imię powinno być krótsze niż 50 liter")
    .required("Pole obowiązkowe"),
  lastName: Yup.string()
    .min(2, "Nazwisko powinno być dłuższe niż 2 litery")
    .max(50, "Nazwisko powinno być dłuższe niż 2 litery")
    .required("Pole obowiązkowe"),
  email: Yup.string().email("Błędny mail.").required("Pole obowiązkowe"),
  phone: Yup.number()
    .integer()
    .min(9)
    // .typeError("Podaj prawidłowy numer telefonu")
    .required("Pole obowiązkowe"),
  address1: Yup.string().required("Pole obowiązkowe"),
  address2: Yup.number()
    .min(1)
    // .typeError("Please enter a valid phone number")
    .required("Pole obowiązkowe"),
  address3: Yup.number().typeError("Please enter a valid phone number"),
  city: Yup.string()
    .min(3, "Miasto musi zawierać co najmniej 3 litery.")
    .required("Pole obowiązkowe"),
  voivodeship: Yup.string().required("Pole obowiązkowe"),
  postalCode: Yup.number().min(5).integer().required("Pole obowiązkowe"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const Step1 = () => {
  return (
    <div>
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
              <Grid
                container
                spacing={2}
                sx={{
                  border: "solid",
                  borderColor: "#BEBEBE",
                  borderRadius: "8px",
                  borderWidth: "1px",
                  pr: "16px",
                }}
              >
                <Grid item xs={12}>
                  <Typography>TWOJE DANE</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField name="firstName" label="Imię" />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="lastName" label="Nazwisko" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="phone" label="Telefon" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>ADRES</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Select
                    name="voivodeship"
                    label="Województwo"
                    options={voivodeship}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="postalCode" label="Kod pocztowy" />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="city" label="Miejscowość" />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="address1" label="Ulica" />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="address2" label="Numer domu" />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="address3" label="Numer mieszkania" />
                </Grid>
                <Grid item xs={12}>
                  <Typography>INFO</Typography>
                </Grid>
                <Grid item xs={12}>
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
                    // legend="something something"
                    label="Wyrażam zgodę"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Button sx={{ maxWidth: "150" }}>Wyślij</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Grid>
    </div>
  );
};

export default Step1;
