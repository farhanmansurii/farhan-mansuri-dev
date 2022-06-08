import {
  Box,
  Grid,
  Heading,
  List,
  Text,
  Flex,
  Container as ChakraContainer,
} from "@chakra-ui/layout";
import { ProjectCard } from "./components/projectCard";
import projects from "./components/data/projectData";
import { FadeIn } from "react-animated-components";
import Head from "next/dist/shared/lib/head";
const Projects = () => {
  return (
    <>
      <Head>
        <title>My Works</title>
      </Head>
      <Flex flexWrap="wrap" my="4rem" direction="row" justify="space-around" al>
        <Intro />
      </Flex>
    </>
  );
};

const Intro = () => {
  return (
    <Box w="100%" as="section" mx="20%">
      <Text
        py="2rem"
        pl="1rem"
        fontSize="5xl"
        fontFamily="ogg"
        fontWeight="bolder"
        align="center"
      >
        Projects I've done !
      </Text>

      <ProjectList />
    </Box>
  );
};

const ProjectList = () => {
  return (
    <FadeIn
      ref={{
        current: "[Circular]",
      }}
      onActive={function noRefCheck() {}}
      onComplete={function noRefCheck() {}}
    >
      <Flex display={{ base: "block", "2xl": "flex" }}>
        {projects.map((project) => (
          <ProjectCard
            snapshot={project.snapshot}
            title={project.title}
            description={project.description}
            tools={project.tools}
            live={project.live}
            proto={project.proto}
            repo={project.repo}
            key={project.id}
          />
        ))}
      </Flex>
    </FadeIn>
  );
};

export default Projects;