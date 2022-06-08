import { Box, Container } from "@chakra-ui/react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Head from "next/dist/shared/lib/head";
export default function about() {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <AboutMe />

      <ContactMe />
    </>
  );
}
