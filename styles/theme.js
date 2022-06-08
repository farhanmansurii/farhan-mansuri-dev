import { extendTheme } from "@chakra-ui/react";
import "@fontsource/domine";
import "@fontsource/work-sans";
import "@fontsource/poppins";
import "@fontsource/space-mono";
import { useColorModeValue } from "@chakra-ui/react";
const styles = {
  global: (props) => ({
    body: {
      fontFamily: "poppins",
      backgroundColor: useColorModeValue("#fffef8", "#141414"),
      textColor: useColorModeValue("#00453d", "#9c795d"),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginBottom: 4,
        marginTop: 3,
      },
    },
  },
};
const fonts = {
  body: "Ogg",
};
const colors = {
  glassTeal: "#88ccca",
};
const config = {
  initialColorMode: "light",
  usesystemColorMode: true,
};
const theme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles,
});
export default theme;
