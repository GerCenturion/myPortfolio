import React, { useState, useRef, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Slide from "@mui/material/Slide";
import LightIcon from "@mui/icons-material/Light";
import { styled } from "@mui/system";

const FloatingButton = styled("div")({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  transition: "transform 0.3s ease-in-out",
});

const FloatingArrow = styled("div")({
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  transition: "transform 0.3s ease-in-out",
});

const ColorModeToggle = ({ onToggle, isDark }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);
  const [clickHandler, setClickHandler] = useState(null);
  const buttonRef = useRef(null);

  const handleToggle = () => {
    onToggle(!isDark);
  };

  const handleDropdownClick = () => {
    setIsDropdownClicked((prev) => !prev);
    setIsVisible((prev) => !prev);
    setClickHandler(() => handleToggle);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsVisible(false);
      setIsDropdownClicked(false);
      setClickHandler(null);
    }
  };

  useEffect(() => {
    console.log("useEffect called after reload");
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Slide
        in={!isDropdownClicked}
        direction="down"
      >
        <FloatingArrow ref={buttonRef}>
          <IconButton
            onClick={handleDropdownClick}
            color="inherit"
          >
            <LightIcon />
          </IconButton>
        </FloatingArrow>
      </Slide>
      <Slide
        in={isDropdownClicked}
        direction="down"
      >
        <FloatingButton>
          <IconButton
            onClick={clickHandler}
            color="inherit"
          >
            {isDark ? <ToggleOffIcon /> : <ToggleOnIcon />}
          </IconButton>
        </FloatingButton>
      </Slide>
    </>
  );
};

export default ColorModeToggle;
