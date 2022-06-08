import { ChakraProvider, Spacer } from "@chakra-ui/react";
import "/Users/Administrator/Downloads/finalv4/my-app/styles/globals.css";
import { Footer } from "./components/Footer";
import theme from "../styles/theme";
import Nav from "./components/Navbar2";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { FadeIn, SlideInUp } from "react-animated-components";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Nav />

      <Component {...pageProps} />

      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
