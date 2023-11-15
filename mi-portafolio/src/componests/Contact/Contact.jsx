import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Alert,
  Snackbar,
  Box,
  CircularProgress,
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
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:3001/sendemail/${formData.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (response.ok) {
        setMessageSent(true);
      } else {
        console.error("Error al enviar el mensaje:", response.statusText);
      }
    } catch (error) {
      console.error("Error de red:", error.message);
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
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
            disabled={isLoading}
          >
            Enviar
          </StyledButton>
        </form>
      </FormContainer>

      {isLoading && (
        <LoaderContainer>
          <CircularProgress
            color="primary"
            size={24}
          />
        </LoaderContainer>
      )}

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
