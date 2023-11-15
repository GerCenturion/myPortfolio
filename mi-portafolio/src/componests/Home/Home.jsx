import React from "react";
import { Typography, Container, Paper, Grid, Link } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Paper sx={{ padding: 4, marginTop: 4 }}>
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
          variant="h3"
          align="left"
          gutterBottom
        >
          Experiencia:
        </Typography>
        <Typography
          align="left"
          paragraph
        >
          - Desarrollo Full Stack con experiencia en JavaScript, CSS, Node.js,
          React y PostgreSQL. - Entrega de proyectos web de principio a fin,
          desde la planificación hasta la implementación. - Colaboración en
          equipos interdisciplinarios para lograr soluciones efectivas. -
          Optimización de rendimiento y mejora de la experiencia del usuario.
        </Typography>

        <Typography
          variant="h3"
          align="left"
          gutterBottom
        >
          Tecnologías:
        </Typography>
        <Typography
          align="left"
          paragraph
        >
          - JavaScript, CSS, HTML. - Node.js para el desarrollo del lado del
          servidor. - React para la creación de interfaces de usuario
          interactivas. - PostgreSQL para bases de datos relacionales. -
          Conocimientos adicionales en tecnologías como Express, Redux y más.
        </Typography>

        <Typography
          variant="h3"
          align="left"
          gutterBottom
        >
          Educación:
        </Typography>
        <Typography
          align="left"
          paragraph
        >
          - Formación como Desarrollador Full Stack Web. - Cursos y proyectos
          avanzados de desarrollo web. - Actualizaciones continuas para estar al
          tanto de las últimas tendencias tecnológicas.
        </Typography>

        <Typography
          variant="h3"
          align="left"
          gutterBottom
        >
          Habilidades:
        </Typography>
        <Typography
          align="left"
          paragraph
        >
          - Resolución de problemas complejos. - Gestión de proyectos web de
          principio a fin. - Comunicación efectiva en equipos de desarrollo.
        </Typography>

        <Typography
          variant="h3"
          align="left"
          gutterBottom
        >
          Conéctate conmigo:
        </Typography>
        <Link
          href="https://linkedin.com/in/gerson-centurion-63a18b22b"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="LinkedIn"
            height="30"
            width="40"
          />
        </Link>

        <Grid
          container
          justifyContent="center"
          marginTop={4}
        >
          <p align="center">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://www.w3.org/html/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://expressjs.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://www.python.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="python"
                width="40"
                height="40"
              />
            </a>
          </p>

          {/* Agrega más botones según tus necesidades */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;
