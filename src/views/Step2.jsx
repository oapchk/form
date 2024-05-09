import {
  // Slider,
  Typography,
  // Switch,
  Box,
  Grid,
  Container,
} from "@mui/material";
import NaturePeopleOutlinedIcon from "@mui/icons-material/NaturePeopleOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import SliderWrapper from "../components/Slider/Slider";
import SwitchWrapper from "../components/Switch/Switch";
const Step2 = () => {
  return (
    <Container>
      <Box p={2}>
        <Typography variant="h6">
          Przesuń suwak zgodnie ze swoim stylem życia
        </Typography>
        <Typography variant="body2" mb={3}>
          Ułatwi to nam wybór odpowiedniego zwierzaka dla Ciebie 🐈
        </Typography>
        <Grid container spacing={5} p={2} mb={8} flexDirection={"column"}>
          <Grid
            item
            sx={12}
            sm={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item display={"flex"}>
              <NaturePeopleOutlinedIcon />
              <Typography pl={2}>Wolę być na świeżym powietrzu</Typography>
            </Grid>
            <SwitchWrapper name="outdoorPerson" />
          </Grid>
          <Grid
            item
            sx={12}
            sm={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item display={"flex"}>
              <ParkOutlinedIcon />
              <Typography pl={2}>Mieszkam blisko parku</Typography>
            </Grid>
            <SwitchWrapper name="liveNearPark" />
          </Grid>
          <Grid
            item
            sx={12}
            sm={6}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Grid item display={"flex"}>
              <LuggageOutlinedIcon />
              <Typography pl={2}>Często podróżuje służbowo</Typography>
            </Grid>
            <SwitchWrapper name="workTravelFrequently" />
          </Grid>
        </Grid>
        <Grid container spacing={5} mb={3} pl={4}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Lubię towarzystwo</Typography>
            <SliderWrapper name="sociable" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Gotuję w domu</Typography>
            <SliderWrapper name="cook" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Lubię chodzić na imprezy</Typography>
            <SliderWrapper name="partyanimal" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Często podróżuję</Typography>
            <SliderWrapper name="traveler" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Lubię aktywność fizyczną</Typography>
            <SliderWrapper name="sportsman" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Wcześnie chodzę spać</Typography>
            <SliderWrapper name="sleepyhead" min={0} max={100} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Step2;
