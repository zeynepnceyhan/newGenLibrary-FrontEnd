import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    intialColorMode: "light",
    useSystemColorMode: true,
  },

  styles: {
    global: {
      body: {
        margin: 0,
        innerWidth: "100%",
        position: "relative",
        textAlign: "center",
        fontFamily:
          "'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },

      code: {
        fontFamily:
          "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace",
      },
    },
  },

  Utilities: {
    size: {
      700: "700px"
    }
  }
};

export default extendTheme(theme);
