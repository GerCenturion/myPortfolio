import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Alert,
  Snackbar,
  Box,
} from "@mui/material";
import { styled, css } from "@mui/system";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import Slide from "@mui/material/Slide";

const FormContainer = styled(Container)(
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  `
);

const StyledTextField = styled(TextField)(
  css`
    width: 100%;
    margin-bottom: 16px;
  `
);

const StyledButton = styled(Button)(
  css`
    width: 100%;
  `
);

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Agrega la lógica para enviar el mensaje aquí.
    console.log("Datos del formulario:", formData);
    // Limpia el formulario después de enviar
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Muestra el mensaje de éxito
    setMessageSent(true);
  };

  return (
    <>
      <FormContainer>
        <h2>Contacto</h2>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Nombre"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <StyledTextField
            label="Correo Electrónico"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <StyledTextField
            label="Mensaje"
            variant="outlined"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <StyledButton
            variant="contained"
            color="primary"
            type="submit"
          >
            Enviar
          </StyledButton>
        </form>
      </FormContainer>

      <Snackbar
        open={messageSent}
        autoHideDuration={3000}
        onClose={() => setMessageSent(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        TransitionComponent={(props) => (
          <Slide
            {...props}
            direction="down"
          />
        )}
      >
        <Box>
          <Alert
            icon={<MarkEmailReadIcon />}
            severity="success"
            onClose={() => {
              setMessageSent(false);
            }}
          >
            Message Sent
          </Alert>
        </Box>
      </Snackbar>
    </>
  );
}

export default Contact;
