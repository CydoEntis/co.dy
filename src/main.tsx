import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import '@mantine/tiptap/styles.css';
import "./index.css";

import theme from "./components/theme/theme.config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>
);
