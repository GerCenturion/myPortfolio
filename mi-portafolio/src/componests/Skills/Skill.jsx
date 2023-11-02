import React from "react";
import {
  Typography,
  Link,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Skills = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
      >
        Habilidades
      </Typography>
      <Box>
        <Typography variant="h5">Lenguajes de Programación</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="JavaScript"
              secondary={
                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  Documentación
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="CSS"
              secondary="Estilos en la web"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="HTML"
              secondary="Lenguaje de marcas"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Java"
              secondary="Lenguaje de programación multipropósito"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Python"
              secondary="Lenguaje versátil"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Kotlin"
              secondary="Lenguaje de programación para Android"
            />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Typography variant="h5">Frameworks y Bibliotecas</Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="React"
              secondary="Biblioteca de JavaScript"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Node.js"
              secondary="Entorno de ejecución"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="PostgreSQL"
              secondary="Sistema de gestión de bases de datos"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Express"
              secondary="Marco de aplicación web"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Redux"
              secondary="Gestión de estado en React"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="mySQL"
              secondary="Sistema de gestión de bases de datos"
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Skills;
