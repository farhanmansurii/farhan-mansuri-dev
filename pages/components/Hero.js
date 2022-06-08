import {
  Flex,
  useColorModeValue,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";

import dynamic from "next/dynamic";
import { FadeIn } from "react-animated-components";
import Newsletter from "./Newsletter";
import { ProjectCard } from "./projectCard";
import projects from "./data/projectData";
import Featured from "./Featured";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});
export default function Hero() {
  return (
    <>
      <FadeIn
        ref={{
          current: "[Circular]",
        }}
        onActive={function noRefCheck() {}}
        onComplete={function noRefCheck() {}}
      >
        <Text
          mt="5rem"
          mb="3rem"
          p="0.5rem"
          align="center"
          borderRadius="xl"
          bg={useColorModeValue("#ffb07b", "#cf4c2e")}
          color={useColorModeValue("#fffef8", "#141414")}
          mx="10%"
        >
          hi I'm a web developer based in Mumbai , India
        </Text>
        <Container
          centerContent
          display="flex"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Flex direction="column " w="100%" p="1rem">
            <Text
              fontWeight="light"
              fontSize={["6xl", "6xl", "6xl", "6xl"]}
              fontFamily="Ogg"
              textTransform="capitalize"
              lineHeight={0.9}
            >
              Farhan Mansuri
            </Text>

            <Flex direction="column" w="100%">
              <Text
                py={3}
                fontSize="10px"
                fontWeight="extrabold"
                textTransform="uppercase"
                letterSpacing="1px"
                color={useColorModeValue("#c3e3d1", "ffb07b")}
              >
                Digital Craftsman(sometimes artist / web developer/ <br />
                software tester)
              </Text>

              <Text
                fontSize="lg"
                fontFamily="Founders Grotesk"
                textTransform="lowercase"
                lineHeight={1}
              >
                hola welcome to my, corner of the internet, where you can find
                my works, thoughts, favourite anime and other random things.
              </Text>
            </Flex>
          </Flex>
          <Container h="300px" w="244px" justify="center" mt="1rem">
            <Spline scene="https://prod.spline.design/mJlnC1uULdyCH65m/scene.splinecode" />
          </Container>
        </Container>
        <Featured />
        <Newsletter />
      </FadeIn>
    </>
  );
}
