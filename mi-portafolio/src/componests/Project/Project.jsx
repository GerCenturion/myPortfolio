import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const Project = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        image="https://via.placeholder.com/1000x200"
        height="200"
        alt="Project"
      />
      <CardContent>
        <Typography variant="h5">Title</Typography>
        <Typography
          component="p"
          variant="body2"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa odio in
          expedita, possimus optio recusandae nihil nesciunt tenetur
          voluptatibus fugiat maxime dolorum odit earum harum exercitationem.
          Perferendis inventore ipsum temporibus!
        </Typography>
      </CardContent>
      <Container sx={{ m: 5 }}>
        <Button variant="contained">Ir a Pagina</Button>
        <Button color="info"> {"<Ver Codigo/>"}</Button>
      </Container>
    </Card>
  );
};

export default Project;
