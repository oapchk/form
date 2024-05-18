import { Grid, Container, Typography } from "@mui/material";
import TextField from "../components/Texftield/texfield";
import Select from "../components/Select/Select";
// import voivodeship from "../data/voivodeship.json";

import Checkbox from "../components/Checkbox/Checkbox";
const Step1 = () => {
  const voivodeship = [
    "dolnośląskie",
    "kujawsko-pomorskie",
    "lubelskie",
    "lubuskie",
    "łódzkie",
    "małopolskie",
    "mazowieckie",
    "opolskie",
    "podkarpackie",
    "podlaskie",
    "pomorskie",
    "śląskie",
    "świętokorzyskie",
    "warmińsko-mazurskie",
    "wielkopolskie",
    "zachodniopomorskie",
  ];
  return (
    <div>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
              <Typography mt={2} sx={{ letterSpacing: 1 }}>
                Personal information
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField name="firstName" label="First name *" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="lastName" label="Last name *" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="email" label="E-mail address *" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="phone" label="Phone number *" />
            </Grid>
            <Grid item xs={12}>
              <Typography mt={2} sx={{ letterSpacing: 1 }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Select
                name="voivodeship"
                label="Choose from the list *
                "
                options={voivodeship}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField name="postalCode" label="Postal code *" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="city" label="City *" />
            </Grid>
            <Grid item xs={12}>
              <TextField name="address1" label="Street *" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="address2" label="Number *" />
            </Grid>
            <Grid item xs={6}>
              <TextField name="address3" label="Apartement number" />
            </Grid>

            <Grid item xs={12}>
              <Checkbox
                name="termsOfService"
                // legend="something something"
                label={
                  <Typography variant="caption" component="h3">
                    Check this box to indicate that you have read and agree to
                    our Terms of Service and Privacy Policy
                  </Typography>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
};

export default Step1;
