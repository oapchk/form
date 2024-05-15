import * as Yup from "yup";
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

Step1.initialValue = {
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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

Step1.validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Imię powinno być dłuższe niż 2 litery")
    .max(50, "Imię powinno być krótsze niż 50 liter")
    .required("Pole obowiązkowe"),
  lastName: Yup.string()
    .min(2, "Nazwisko powinno być dłuższe niż 2 litery")
    .max(50, "Nazwisko powinno być dłuższe niż 2 litery")
    .required("Pole obowiązkowe"),
  email: Yup.string().email("Błędny mail.").required("Pole obowiązkowe"),
  phone: Yup.string()
    .min(9)
    .max(9)
    .nullable()
    .matches(phoneRegExp, "Phone number is not valid")
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
export default Step1;
