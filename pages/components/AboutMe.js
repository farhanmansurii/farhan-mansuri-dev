import {
  Avatar,
  Container,
  Heading,
  Image,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FadeIn } from "react-animated-components";
import ContactMe from "./ContactMe";
import Skills from "./skills/Skills";
const AboutMe = () => {
  return (
    <FadeIn
      ref={{
        current: "[Circular]",
      }}
      onActive={function noRefCheck() {}}
      onComplete={function noRefCheck() {}}
    >
      <Container align="center" mb="4rem" pt="4rem">
        <Image
          src="https://i.imgur.com/mRuTw7R.jpg?1"
          alt="farhan mansuri"
          border="2px solid"
          borderColor={useColorModeValue("#c3e3d1", "#9c795d")}
          w="8rem"
          borderRadius="99px"
          my="2rem"
        />
        <Heading
          fontFamily="ogg"
          fontSize="5xl"
          textTransform="uppercase"
          fontWeight="medium"
          mb="2rem"
        >
          Background
        </Heading>
        <Text fontFamily="Founders Grotesk" fontSize="lg" mb="1rem">
          Hey there! I’m Farhan Mansuri, a Web Developer /QA tester fascinated
          by the prospect of using technology to aid in creating a fairer, more
          inclusive world.
        </Text>
        <Spacer />
        <Text fontFamily="Founders Grotesk" fontSize="lg" mb="1rem">
          I like to spend my time designing and building solutions, as well as
          pushing myself to learn more through projects or through books or
          tutorials .
        </Text>

        <Text fontFamily="Founders Grotesk" fontSize="lg" mb="2rem">
          I studied Bachelors in information Technology from L.S Raheja College
          from 2016-2019 and then I&apos;m almost done with my Masters in
          Computer Science , specializing in Machine Learning since 2020 and
          expect myself to graduate this year !
        </Text>
        <Skills />
        <Heading
          fontFamily="ogg"
          fontSize="5xl"
          textTransform="uppercase"
          fontWeight="medium"
          mb="2rem"
          mt="4rem"
        >
          What ive been up to !
        </Heading>
        <Text fontFamily="Founders Grotesk" fontSize="lg" mb="1rem">
          I&apos;ve been recently focused on building React applications, diving
          deeper into React and NextJS itself as well as libraries and tools
          surrounding it.
        </Text>
        <Text fontFamily="Founders Grotesk" fontSize="lg" mb="1rem">
          I like to spend my time designing and building solutions, as well as
          pushing myself to learn more through projects or through books or
          tutorials .
        </Text>

        <Text fontFamily="Founders Grotesk" fontSize="lg" mb="1rem">
          Im currently in my last semester so I was preparing for the final
          project titled &apos; Job recommendation system using machine
          learning&apos; as i did my research paper on it too and coding it on
          jupyter as a solo project. I&apos;m also doing my internship in QA
          testing too !
        </Text>
        <Heading
          fontFamily="ogg"
          fontSize="5xl"
          textTransform="uppercase"
          fontWeight="medium"
          mb="2rem"
          mt="4rem"
        >
          Interests
        </Heading>
        <Text fontFamily="Founders Grotesk" fontSize="lg" mb="1rem">
          When I&apos;m not coding or working you&apos;ll typically find me
          engaging with another creative or engaging activity such as listening
          to music, gaming or occasionally getting lost in a some anime series !
        </Text>
      </Container>
    </FadeIn>
  );
};

export default AboutMe;
