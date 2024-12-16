import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { Moon, Sun } from "lucide-react";
import useGetColorTheme from "./hooks/useGetColorScheme";

type ThemeToggleProps = {
  size?: number;
}

function ThemeToggle({size = 16}: ThemeToggleProps) {
  const { setColorScheme } = useMantineColorScheme();
  const { isLightMode } = useGetColorTheme();

  return (
    <ActionIcon
      onClick={() => setColorScheme(isLightMode ? "dark" : "light")}
      variant="subtle"
      size="lg"
      aria-label="Toggle color scheme"
      c="inverse"
    >
      {isLightMode ? <Moon size={size} /> : <Sun size={size} />}
    </ActionIcon>
  );
}

export default ThemeToggle;
