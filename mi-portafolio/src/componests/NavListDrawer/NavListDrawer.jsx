import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box, width } from "@mui/system";

export default function NavListDrawer({ navLinks, onCloseDrawer }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
              onClick={() => {
                onCloseDrawer();
              }}
            >
              <ListItemButton
                component="a"
                href={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem></ListItem>
        </List>
      </nav>
    </Box>
  );
}
