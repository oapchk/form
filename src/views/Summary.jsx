import { Typography, Container, Box, Button } from "@mui/material";
// import dog from "./../assets/dog.png";

const Summary = () => {
  return (
    <Container
      maxWidth="sm"
      p={2}
      // sx={{
      //   backgroundImage: `url(${dog})`,
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Box
        display="flex"
        flexDirection="column"
        // sx={{
        //   display: { xs: "flex", sm: "grid", md: "grid" },
        //   flexDirection: { xs: "column", sm: "initial", md: "initial" },
        //   gridTemplateColumns: { sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)" },
        //   gridTemplateRows: { sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)" },
        // }}
      >
        <Typography
          variant="h1"
          fontFamily="Dancing Script"
          p={2}
          sx={{
            // gridColumn: { sm: "2 / 3", md: "2 / 3" },
            // gridRow: { sm: "1", md: "1" },
            // alignItems: { xs: "flex-end", sm: "center", md: "center" },
            textAlign: { xs: "center", sm: "center", md: "center" },
          }}
        >
          Thank you!
        </Typography>
        <Typography
          variant="subtitle2"
          p={2}
          align="center"
          // sx={{ gridColumn: "2/3", gridRow: "2" }}
        >
          Your responses will help us find the perfect furry companion for you.
          Our team will carefully review your answers and get in touch with you
          soon to discuss the next steps in the adoption process. If you have
          any further questions or concerns, feel free to reach out to us. Once
          again, thank you for your interest in adopting a pet and making a
          difference in an animal&apos;s life!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" pb="2">
        <Button>close</Button>
      </Box>
    </Container>
  );
};

export default Summary;
