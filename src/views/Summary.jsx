import { Typography, Container, Box } from "@mui/material";
import dog from "./../assets/dog.png";

const Summary = () => {
  return (
    <Container
      maxWidth="md"
      p={2}
      sx={{
        backgroundImage: `url(${dog})`,
        backgroundSize: "contain",
        // backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
        }}
      >
        <Typography
          variant="h5"
          p={2}
          align="center"
          sx={{ gridColumn: " 2/3", gridRow: "1" }}
        >
          Thank you!
        </Typography>
        <Typography
          variant="subtitle1"
          p={2}
          align="center"
          sx={{ gridColumn: "2/3", gridRow: "2" }}
        >
          Your responses will help us find the perfect furry companion for you.
          We appreciate your time and consideration in providing this valuable
          information. Our team will carefully review your answers and get in
          touch with you soon to discuss the next steps in the adoption process.
          If you have any further questions or concerns, feel free to reach out
          to us. Once again, thank you for your interest in adopting a pet and
          making a difference in an animal&apos;s life!
        </Typography>
      </Box>
    </Container>
  );
};

export default Summary;
