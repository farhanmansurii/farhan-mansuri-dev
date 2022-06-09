import { extendTheme } from "@chakra-ui/react";
import "@fontsource/domine";
import "@fontsource/work-sans";
import "@fontsource/poppins";
import "@fontsource/space-mono";
import { mode } from "@chakra-ui/theme-tools";
import { useColorModeValue } from "@chakra-ui/react";
const styles = {
  global: (props) => ({
    body: {
      fontFamily: "Founders Grotesk",
      color: mode("#446A46", "#e3cab6")(props),
      bg: mode("#EFEAD8", "#141414")(props),
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
