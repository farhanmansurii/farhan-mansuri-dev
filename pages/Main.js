import Hero from "./components/Hero";
import { Flex } from "@chakra-ui/react";
import { SlideInUp } from "react-animated-components";
import Newsletter from "./components/Newsletter";
import Featured from "./components/Featured";
export default function Main() {
  return (
    <Flex justify="center">
      <Hero />
    </Flex>
  );
}
