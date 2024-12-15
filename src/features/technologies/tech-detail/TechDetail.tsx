import { Paper, Text } from "@mantine/core";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";
import { Technology } from "../my-technologies/technologies";

type TechDetailProps = {
  technology: Technology;
};

function TechDetail({ technology }: TechDetailProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Paper
      withBorder
      p={8}
      bg="secondary"
      c="inverse"
      key={technology.name}
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      <Text size="sm" fw={700} c="altText">
        {technology.name}
      </Text>
    </Paper>
  );
}

export default TechDetail;
