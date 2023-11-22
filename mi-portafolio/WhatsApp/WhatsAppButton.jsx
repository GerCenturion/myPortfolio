import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/5493413613157?text=Hola Gerson `;

  const openWhatsApp = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        minWidth: "unset",
        minHeight: "unset",
        zindex: 1,
        padding: 0,
      }}
      onClick={openWhatsApp}
    >
      <WhatsAppIcon style={{ fontSize: "2rem" }} />
    </Button>
  );
};

export default WhatsAppButton;
