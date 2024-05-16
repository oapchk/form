import { Grid, Container, Typography, FormControl } from "@mui/material";
import Select from "../components/Select/Select";

const Step3 = () => {
  const questions = [
    {
      id: "dreamPet",
      question: "I’d like to adopt a",
      options: ["dog", "cat", "raccoon", "rabbit", "hedgehog"],
    },
    {
      id: "haveGarden",
      question: "My home has",
      options: ["no yard", "a fenced yard", "a yard"],
    },
    {
      id: "havePets",
      question: "I currently have",
      options: ["no animals", "cat(s)", "dog(s)"],
    },
    {
      id: "preferedAge",
      question: "I prefer a pet that is",
      options: ["kitten/puppy", "a senior", "an adult", "a young"],
    },

    {
      id: "preferedGender",
      question: "I would like to adopt",
      options: ["female", "male", "no gender preference"],
    },
    {
      id: "preferedSize",
      question: "I prefere a pet that is",
      options: ["small", "medium", "large", "no size preference"],
    },
  ];

  return (
    <Container maxWidth="md">
      {questions.map((question) => (
        <Grid pb={2} container spacing={2} key={question.id}>
          <Grid item xs={12}>
            <Typography variant="body1" mt={2} fontWeight="bold">
              {question.question}:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Select
                name={`${question.id}`}
                label={"Choose from the list *"}
                options={question.options}
              />
            </FormControl>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default Step3;
