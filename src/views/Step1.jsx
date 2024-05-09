import { Grid, Container, Typography } from "@mui/material";
// import { Form, Formik } from "formik";
// import * as Yup from "yup";
import TextField from "../components/Texftield/texfield";
import Select from "../components/Select/Select";
import voivodeship from "../data/voivodeship.json";
import Checkbox from "../components/Checkbox/Checkbox";
const Step1 = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid container spacing={2} p={2}>
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
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default Step1;
