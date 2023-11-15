import React, { useState } from "react";
import Slider from "react-slick";
import {
  Typography,
  Link,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Divider from "@mui/material/Divider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const sliderSettings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    swipe: true,
  };

  const programmingLanguages = [
    {
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "CSS",
      link: "https://www.w3schools.com/css/",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "HTML",
      link: "https://www.w3.org/html/",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "Java",
      link: "https://www.java.com/",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg",
    },
    {
      name: "Python",
      link: "https://www.python.org/",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    },
    {
      name: "Kotlin",
      link: "https://kotlinlang.org/",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original-wordmark.svg",
    },
    // Agrega más lenguajes según sea necesario
  ];

  const frameworksAndLibraries = [
    {
      name: "React",
      description: "Biblioteca de JavaScript",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Node.js",
      description: "Entorno de ejecución",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      description: "Sistema de gestión de bases de datos",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    },
    {
      name: "Express",
      description: "Marco de aplicación web",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    },
    {
      name: "Redux",
      description: "Gestión de estado en React",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    },
    {
      name: "MySQL",
      description: "Sistema de gestión de bases de datos",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
  ];

  const [isSliderPaused, setSliderPaused] = useState(false);

  const handleSliderPause = () => {
    setSliderPaused(true);
  };

  const handleSliderResume = () => {
    setSliderPaused(false);
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
      ></Typography>

      <Box>
        <Slider
          {...sliderSettings}
          onMouseEnter={handleSliderPause}
          onMouseLeave={handleSliderResume}
          paused={isSliderPaused}
        >
          {programmingLanguages.map((language, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={language.name}
                secondary={
                  <Link
                    href={language.link}
                    target="_blank"
                    rel="noreferrer"
                  ></Link>
                }
              />
              <img
                src={language.imgSrc}
                alt={language.name}
                style={{ width: 160, height: 160 }}
              />
            </ListItem>
          ))}
        </Slider>
      </Box>

      <Divider
        variant="middle"
        style={{ margin: "20px 0" }}
      />

      <Box>
        <Slider
          {...sliderSettings}
          onMouseEnter={handleSliderPause}
          onMouseLeave={handleSliderResume}
          paused={isSliderPaused}
        >
          {frameworksAndLibraries.map((framework, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={framework.name}
                secondary={framework.description}
              />
              <img
                src={framework.imgSrc}
                alt={framework.name}
                style={{ width: 160, height: 160 }}
              />
            </ListItem>
          ))}
        </Slider>
      </Box>
    </Container>
  );
};

export default Skills;
