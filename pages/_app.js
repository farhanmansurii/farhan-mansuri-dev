import { ChakraProvider, Container, Spacer, Box } from "@chakra-ui/react";
import "./styles/globals.css";
import { Footer } from "./components/Footer";
import theme from "./styles/theme";
import Nav from "./components/Navbar2";
import { useColorModeValue } from "@chakra-ui/react";
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
