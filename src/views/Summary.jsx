import { Typography, Container } from "@mui/material";

const Summary = () => {
  return (
    <Container maxWidth="md" p={2}>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </Container>
  );
};

export default Summary;
