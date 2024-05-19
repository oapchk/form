import { Grid, Container, Typography } from "@mui/material";
import TextField from "../components/Texftield/texfield";

const Step4 = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <Typography variant="h6">
            Do you have any additional questions or information you&apos;d like
            to share with us?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            label="Feel free to ask 🐶"
            multiline={true}
            rows={4}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Step4;
