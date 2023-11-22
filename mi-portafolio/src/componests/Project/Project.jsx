import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const Project = ({ title, description, imageUrl, projectUrl, codeUrl }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "75%", maxWidth: 600, marginBottom: 4 }}>
        <CardMedia
          component="img"
          image={imageUrl}
          height="200"
          alt={title}
        />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{ textAlign: "justify" }}
          >
            {description}
          </Typography>
        </CardContent>
        <Container sx={{ m: 5 }}>
          <Button
            variant="contained"
            href={projectUrl}
            target="_blank"
          >
            Ir a Página
          </Button>
          <Button
            href={codeUrl}
            target="_blank"
            color="primary"
          >
            {"<Ver Codigo/>"}
          </Button>
        </Container>
      </Card>
    </Container>
  );
};

const Projects = () => {
  return (
    <div>
      <Project
        title="RodarRent"
        description="Este es el sitio web de una compañía de alquiler de autos que se esfuerza por proporcionar la mejor experiencia posible. Algunas características destacadas incluyen la opción de Modo Oscuro, la pasarela de pago segura a través de MercadoPago, autenticación rápida mediante Google, notificaciones por correo electrónico implementadas con Nodemailer, paneles de control tanto para administradores como para clientes, visualización de disponibilidad y reservas en tiempo real, sistema de calificaciones y comentarios, soporte en línea a través de chat en vivo, y notificaciones instantáneas sobre el estado de las reservas, recordatorios de devolución y ofertas exclusivas."
        imageUrl="https://res.cloudinary.com/dk5oluny4/image/upload/v1700012688/txee11s2eqw8anxcxi7o.jpg"
        projectUrl="https://rodarrent.vercel.app/"
        codeUrl="https://github.com/GerCenturion/ProyectoFinalRodarRent"
      />
      <Project
        title="VideoGames"
        description="Sistema de Gestión de Contenidos Multimedia, posee una plataforma interactiva y estéticamente agradable para explorar una variedad de contenidos provenientes de una API externa. En el frontend, el formulario de creación se valida de manera eficiente con JavaScript, ofreciendo una experiencia de usuario fluida. Las funcionalidades de filtrado y ordenamiento se ejecutan localmente, sin depender de los endpoints de la API externa.

        En el backend, la configuración del archivo .env y la generación de la base de datos PostgreSQL se han completado con éxito. Los modelos de base de datos, con sus validaciones y relaciones N:N implementadas con Sequelize, garantizan la integridad de los datos. Las rutas del backend han sido diseñadas y probadas, proporcionando datos esenciales para la visualización y detalles de cada elemento multimedia.
        
        En el frontend, el diseño uniforme y estilizado se ha logrado, con una Landing Page atractiva y una Home Page que presenta resultados paginados, búsqueda, filtros y ordenamiento. Las páginas Detail y Form muestran detalles y permiten la creación reactiva de nuevos elementos multimedia."
        imageUrl="https://res.cloudinary.com/dk5oluny4/image/upload/v1700482920/ubkfqbbth5ndsobdbwic.jpg"
        projectUrl="https://gersonpivideogame.vercel.app/"
        codeUrl="https://github.com/GerCenturion/FrontendVideoGame"
      />
      {/* Add more Project components for additional projects */}
    </div>
  );
};

export default Projects;
