import { Grid, Container, Typography, FormControl } from "@mui/material";
import Select from "../components/Select/Select";
import * as Yup from "yup";

const Step3 = () => {
  return (
    <Container maxWidth="md">
      {/* Pytanie 1 */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            Jakie zwierzę chcesz adoptować:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              name="dreamPet"
              label="Jakie zwierzę chcesz adoptować"
              options={["Pies", "Kot", "Szop", "Królik", "Jeż"]}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* Pytanie 2 */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">Mój dom:</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              name="haveGarden"
              label="Mój dom"
              options={[
                "ma podwórko",
                "ma ogrodzone podwórko",
                "nie ma podwórka",
              ]}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* Pytanie 3 */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">Aktualnie:</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              name="havePets"
              label="Aktualnie"
              options={["nie mam zwierząt", "mam zwierzę"]}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* Pytanie 4 */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">Preferowany wiek zwierzaka:</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              name="preferedAge"
              label="Preferowany wiek zwierzaka"
              options={[
                "kocię/szczenię",
                "dorosły",
                "senior",
                "nie mam preferencji",
              ]}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* Pytanie 5 */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">Preferowana płeć:</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              name="preferedGender"
              label="Preferowana płeć"
              options={["samiec", "samica", "nie mam preferencji"]}
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* Pytanie 6 */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">Preferowana wielkość:</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <Select
              name="preferedSize"
              label="Preferowana wielkość"
              options={["mały", "średni", "duży", "nie mam preferencji"]}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

// const Step3 = () => {
//   const questions = [
//     {
//       id: "dreamPet",
//       question: "Jakie zwierzę chcesz adoptować",
//       options: ["Pies", "Kot", "Szop", "Królik", "Jeż"],
//     },
//     {
//       id: "haveGarden",
//       question: "Mój dom",
//       options: ["ma podwórko", " ma ogrodzone podwórko", "nie ma podwórka"],
//     },
//     {
//       id: "havePets",
//       question: "Aktualnie",
//       options: ["nie mam zwierząt", " mam zwierzę"],
//     },
//     {
//       id: "preferedAge",
//       question: "Preferowany wiek zwierzaka",
//       options: ["kocię/szczenię", "dorosły", "senior", "nie mam preferencji"],
//     },
//     {
//       id: "preferedGender",
//       question: "Preferowana płeć",
//       options: ["samiec", "samica", "nie mam preferencji"],
//     },
//     {
//       id: "preferedSize",
//       question: "Preferowana wielkość",
//       options: ["mały", "średni", "duży", "nie mam preferencji"],
//     },
//   ];

//   return (
//     <Container maxWidth="md">
//       {questions.map((question) => (
//         <Grid container spacing={2} key={question.id}>
//           <Grid item xs={12}>
//             <Typography variant="body1">{question.question}:</Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <Select
//                 name={`${question.id}`}
//                 label={question.question}
//                 options={question.options}
//               />
//             </FormControl>
//           </Grid>
//         </Grid>
//       ))}
//     </Container>
//   );
// };

// Dodajemy właściwości initialValue i validationSchema bezpośrednio do obiektu funkcji komponentu
Step3.initialValue = {
  dreamPet: "", // Dodajemy pole z Step3 do InitialFormState
  haveGarden: "", // Dodajemy pole z Step3 do InitialFormState
  havePets: "", // Dodajemy pole z Step3 do InitialFormState
  preferedAge: "", // Dodajemy pole z Step3 do InitialFormState
  preferedGender: "", // Dodajemy pole z Step3 do InitialFormState
  preferedSize: "",
};

Step3.validationSchema = Yup.object().shape({
  dreamPet: Yup.string().required("Wybierz zwierzę do adopcji"),
  haveGarden: Yup.string().required("Wybierz opcję"),
  havePets: Yup.string().required("Wybierz opcję"),
  preferedAge: Yup.string().required("Wybierz opcję"),
  preferedGender: Yup.string().required("Wybierz opcję"),
  preferedSize: Yup.string().required("Wybierz opcję"),
});

export default Step3;
