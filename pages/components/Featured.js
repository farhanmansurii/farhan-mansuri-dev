import React, { useState } from "react";
import projects from "./data/projects";
import { ProjectCard } from "./projectCard";
import Link from "next/link";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
export default function Featured() {
  return (
    <Flex direction="column" my="5rem">
      <Text
        align="center"
        fontSize="6xl"
        fontFamily="Ogg"
        my="2.8rem"
        mx="2rem"
      >
        Featured Works
      </Text>
      <Flex direction={{ base: "column", md: "row" }}>
        {projects.slice(0, 2).map((project) => (
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
      <Text
        py="0.5rem"
        mx="3rem"
        fontSize="xl"
        color={useColorModeValue("#c3e3d1", "#131200")}
        bg={useColorModeValue("#00453d", "#9c795d")}
        align="center"
        borderRadius="xl"
      >
        <Link href="/work">View more of my work</Link>
      </Text>
    </Flex>
  );
}
