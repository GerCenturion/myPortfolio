import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Alert,
  Snackbar,
  Box,
  Card,
  Typography,
  Link,
} from "@mui/material";
import { styled, css } from "@mui/system";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import Slide from "@mui/material/Slide";
import Loader from "../Loader/Loader.jsx";

console.log(import.meta.env.REACT_APP_URL_SEND_MAIL);
const apiUrl =
  import.meta.env.REACT_APP_URL_SEND_MAIL || "http://localhost:3001/sendemail/";
console.log(apiUrl);

const FormContainer = styled(Container)(
  css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  `
);

const IconsContainer = styled(Box)(
  css`
    position: fixed;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  `
);

const StyledTextField = styled(TextField)(
  css`
    width: 100%;
    margin-bottom: 16px;
  `
);

const MovingCard = styled(Card)(
  css`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: moveCard 1.5s infinite alternate;

    @keyframes moveCard {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(16px);
      }
    }
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

      const response = await fetch(`${apiUrl}${formData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

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
        <MovingCard>
          <Typography
            variant="h6"
            align="center"
          >
            <Loader />
          </Typography>
        </MovingCard>
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
      <IconsContainer>
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
        <Link
          href="https://github.com/GerCenturion"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
            alt="GitHub"
            height="30"
            width="40"
          />
        </Link>
        <Link
          href="https://discord.gg/RYtBAaePgC"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
            alt="Discord"
            height="30"
            width="40"
          />
        </Link>
      </IconsContainer>
    </>
  );
}

export default Contact;
