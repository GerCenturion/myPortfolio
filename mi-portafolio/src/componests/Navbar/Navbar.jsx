import React from "react";
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const theme = createTheme();

const AppBarStyled = styled(AppBar)({
  backgroundColor: "#333",
});

const TypographyStyled = styled(Typography)({
  textDecoration: "none",
  fontSize: "1.5rem",
  color: "#fff",
});

const ListStyled = styled("ul")({
  listStyle: "none",
  display: "flex",
  marginLeft: "auto",
});

const ListItemStyled = styled("li")({
  marginRight: "1rem",
});

const LinkStyled = styled(Link)({
  textDecoration: "none",
  color: "#fff",
});

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBarStyled position="static">
        <Toolbar>
          <TypographyStyled
            variant="h6"
            component={RouterLink}
            to="/"
          >
            Gerson
          </TypographyStyled>
          <ListStyled>
            <ListItemStyled>
              <LinkStyled
                component={RouterLink}
                to="/portfolio"
              >
                Portafolio
              </LinkStyled>
            </ListItemStyled>
            <ListItemStyled>
              <LinkStyled
                component={RouterLink}
                to="/skills"
              >
                Habilidades
              </LinkStyled>
            </ListItemStyled>
            <ListItemStyled>
              <LinkStyled
                component={RouterLink}
                to="/contact"
              >
                Contacto
              </LinkStyled>
            </ListItemStyled>
          </ListStyled>
        </Toolbar>
      </AppBarStyled>
    </ThemeProvider>
  );
}

export default Navbar;
