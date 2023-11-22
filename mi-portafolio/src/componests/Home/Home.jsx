import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Paper
        sx={{
          padding: 4,
          marginTop: 4,
          margin: "0 auto", // Centra el Paper horizontalmente
          maxWidth: "800px", // Establece el ancho máximo para evitar encimamiento
        }}
      >
        {/* <img
          src="https://res.cloudinary.com/dk5oluny4/image/upload/v1699659779/zfsnskbdzkq7ez9jycor.png"
          alt="Gerson's Image"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: "200px", // Ajusta el ancho según tus necesidades
            height: "200px", // Ajusta la altura según tus necesidades
          }}
        /> */}
        <Typography
          variant="h2"
          align="center"
          gutterBottom
        >
          ¡Hola! 👋 Soy Gerson
        </Typography>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
        >
          Desarrollador Full Stack Web
        </Typography>

        <Typography
          align="left"
          paragraph
        >
          Soy un comprometido Desarrollador Full Stack con una base sólida en
          JavaScript, CSS, Node.js, React y PostgreSQL. Mi carrera profesional
          comenzó en el ámbito de la logística y la gestión de la cadena de
          suministro, donde perfeccioné mi capacidad para resolver problemas y
          desarrollé mis habilidades de liderazgo.
        </Typography>
        <Typography
          align="left"
          paragraph
        >
          Mi transición al desarrollo de software me ha permitido no solo
          optimizar procesos, sino también crear soluciones innovadoras que
          impulsan la eficiencia y la efectividad. Disfruto cada desafío que se
          presenta en mi camino y me esfuerzo por contribuir al éxito de cada
          proyecto que emprendo.
        </Typography>
        <Typography
          align="left"
          paragraph
        >
          Estoy firmemente comprometido con el aprendizaje continuo y busco
          fortalecer constantemente mis conocimientos en el siempre cambiante
          panorama tecnológico. Si estás en busca de un dedicado Desarrollador
          Full Stack con talento para la resolución creativa de problemas y
          pasión por la innovación, soy tu candidato ideal. Unámonos para
          construir algo grandioso.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Home;
