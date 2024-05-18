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
          Fill out your personalized preferences
        </Typography>
        <Typography variant="body2" mb={3}>
          We&apos;ll match you with your dream pet based on your answers 🐈
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
              <Typography pl={2}>I prefere being outdoors</Typography>
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
              <Typography pl={2}>I live near park</Typography>
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
              <Typography pl={2}>I travel for work often</Typography>
            </Grid>
            <SwitchWrapper name="workTravelFrequently" />
          </Grid>
        </Grid>
        <Grid container spacing={5} mb={3} pl={4}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>I am very sociable</Typography>
            <SliderWrapper name="sociable" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>I cook every night</Typography>
            <SliderWrapper name="cook" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>I like going to parties</Typography>
            <SliderWrapper name="partyanimal" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>I travel often</Typography>
            <SliderWrapper name="traveler" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>I am very active</Typography>
            <SliderWrapper name="sportsman" min={0} max={100} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>I go to sleep early</Typography>
            <SliderWrapper name="sleepyhead" min={0} max={100} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Step2;
