import { colorsTuple, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
  cursorType: "pointer",
  colors: {
    // darkPrimary: colorsTuple("#111111"),
    // darkSecondary: colorsTuple("#1C1C1C"),
    darkPrimary: colorsTuple("#10171F"),
    darkSecondary: colorsTuple("#1A222B"),
    lightPrimary: colorsTuple("#FFFBF5"),
    lightSecondary: colorsTuple("#FFFFFF"),
    lightText: colorsTuple("#F5F5F5"),
    darkText: colorsTuple("#181818"),
    primary: virtualColor({
      name: "primary",
      dark: "darkPrimary",
      light: "lightPrimary",
    }),
    secondary: virtualColor({
      name: "secondary",
      light: "lightSecondary",
      dark: "darkSecondary",
    }),
    inverse: virtualColor({
      name: "inverse",
      light: "darkPrimary",
      dark: "lightPrimary",
    }),
    text: virtualColor({
      name: "text",
      dark: "lightText",
      light: "darkText",
    }),
  },
  fontFamily: "Open Sans, sans-serif",
  headings: {
    fontFamily: "Tinos, sans-serif",
  },
  components: {
    Text: {
      defaultProps: {
        color: "text",
      },
    },
  },
});

export default theme;
