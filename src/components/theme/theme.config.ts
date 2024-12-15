import { colorsTuple, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
	cursorType: "pointer",
	colors: {
		darkPrimary: colorsTuple("#111111"),
		darkSecondary: colorsTuple("#1C1C1C"),
		lightPrimary: colorsTuple("#FFFBF5"),
		lightSecondary: colorsTuple("#FFFFFF"),
		primary: virtualColor({
			name: "primary",
			dark: "darkPrimary",
			light: "lightPrimary",
		}),
		secondary: virtualColor({
			name: "secondary",
			dark: "darkSecondary",
			light: "lightSecondary",
		}),
	},
	// fontFamily: "Happy Monkey, sans-serif",
});

export default theme;