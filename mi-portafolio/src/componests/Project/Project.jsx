import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const Project = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <Card sx={{ width: "75%", maxWidth: 600 }}>
        <CardMedia
          component="img"
          image="https://res.cloudinary.com/dk5oluny4/image/upload/v1700012688/txee11s2eqw8anxcxi7o.jpg"
          height="200"
          alt="Project"
        />
        <CardContent>
          <Typography variant="h5">RodarRent</Typography>
          <Typography
            component="p"
            variant="body2"
            sx={{ textAlign: "justify" }}
          >
            Este es el sitio web de una compañía de alquiler de autos que se
            esfuerza por proporcionar la mejor experiencia posible. Algunas
            características destacadas incluyen la opción de Modo Oscuro, la
            pasarela de pago segura a través de MercadoPago, autenticación
            rápida mediante Google, notificaciones por correo electrónico
            implementadas con Nodemailer, paneles de control tanto para
            administradores como para clientes, visualización de disponibilidad
            y reservas en tiempo real, sistema de calificaciones y comentarios,
            soporte en línea a través de chat en vivo, y notificaciones
            instantáneas sobre el estado de las reservas, recordatorios de
            devolución y ofertas exclusivas.
          </Typography>
        </CardContent>
        <Container sx={{ m: 5 }}>
          <Button
            variant="contained"
            href="https://rodarrent.vercel.app/"
            target="_blank"
          >
            Ir a Página
          </Button>
          <Button
            href="https://github.com/GerCenturion/ProyectoFinalRodarRent"
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

export default Project;
