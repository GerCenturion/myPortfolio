import React, { useState } from "react";
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
  styled,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import DraftsIcon from "@mui/icons-material/Drafts";
import NavListDrawer from "../NavListDrawer/NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";

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

const navLinks = [
  {
    title: "Portafolio",
    path: "#portfolio",
    icon: <WorkIcon />,
  },
  {
    title: "Skills",
    path: "#skills",
    icon: <CodeIcon />,
  },
  {
    title: "Contacto",
    path: "#contact",
    icon: <DraftsIcon />,
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleCloseDrawer = () => {
    setOpen(false);
  };

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
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navLinks.map((item) => (
                <Button
                  color="inherit"
                  key={item.title}
                  component="a"
                  href={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </ListStyled>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer
          navLinks={navLinks}
          onCloseDrawer={handleCloseDrawer}
        />
      </Drawer>
    </ThemeProvider>
  );
}

export default Navbar;
