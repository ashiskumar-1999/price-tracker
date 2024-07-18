import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
  colors: {
    gray: {
      100: "#BDBEBF",
      200: "#6F7177",
    },
    purple: "#4B40EE",
    blue: "#1A243A",
    green: "#67BF6B",
  },
});

export default theme;
