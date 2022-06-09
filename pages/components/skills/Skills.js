import {
  Text,
  Container as ChakraContainer,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/layout";
import * as tool from "./tools";
import Icon from "@chakra-ui/icon";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
import { DiNodejs, DiPython } from "react-icons/di";
export const html5 = {
  name: "HTML5",
  icon: SiHtml5,
  color: "#E34F26",
  id: uuidv4(),
};

export const css3 = {
  name: "CSS3",
  icon: SiCss3,
  color: "#1572B6",
  id: uuidv4(),
};

export const js = {
  name: "JavaScript",
  icon: SiJavascript,
  color: "#F7DF1E",
  id: uuidv4(),
};

export const github = {
  name: "Github",
  icon: SiGithub,
  color: "white",
  id: uuidv4(),
};

export const react = {
  name: "React",
  icon: SiReact,
  color: "#61DAFB",
  id: uuidv4(),
};

export const nodejs = {
  name: "Node.js",
  icon: DiNodejs,
  color: "#339933",
  id: uuidv4(),
};

export const nextjs = {
  name: "Next.js",
  icon: SiNextdotjs,
  color: "#000000",
  id: uuidv4(),
};

export const python = {
  name: "Python",
  icon: DiPython,
  color: "green",
  id: uuidv4(),
};

import { useCallback, useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}
const Skills = () => {
  const skills = Object.values(tool).slice(0, 12);
  return (
    <Flex direction="column" w="100%" align="center" my="3rem">
      <Text
        fontSize="5xl"
        textTransform="uppercase"
        fontFamily="Ogg"
        align="center"
      >
        Skills
      </Text>
      <ChakraContainer
        maxW={{ base: "20rem", sm: "30rem", md: "40rem" }}
        textAlign="center"
        p={0}
      >
        <Text mb="3rem">
          One of my favourite things since I started to learn to code has been
          to discover all of the amazing tools and abstractions developers have
          created to make theirs and other developer&apos;s lives easier. Here
          are some of the tools I use most frequently.
        </Text>
      </ChakraContainer>
      <Grid
        m="auto"
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        as="ul"
      >
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            key={skill.id}
          />
        ))}
      </Grid>
    </Flex>
  );
};

const Skill = ({ name, icon, color }) => {
  const [hover, toggleHover] = useToggle();
  return (
    <GridItem
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      p={{ base: "0.5rem", "2xl": "1rem" }}
      textAlign="center"
      alignContent="center"
      display="flex"
      flexDirection="column"
      listStyleType="none"
      as="li"
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: "2rem", lg: "3rem", "2xl": "4rem" }}
        as={icon}
        fill={hover && color}
        transitionDuration="500ms"
      />
      {name}
    </GridItem>
  );
};
export default Skills;
