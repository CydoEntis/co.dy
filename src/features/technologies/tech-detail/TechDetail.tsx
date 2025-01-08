import { Paper, Text } from "@mantine/core";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

type TechDetailProps = {
  technology: string;
};

function TechDetail({ technology }: TechDetailProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Paper
      withBorder
      p={8}
      bg="secondary"
      c="inverse"
      key={technology}
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      <Text size="sm" fw={700} c="altText">
        {technology}
      </Text>
    </Paper>
  );
}

export default TechDetail;
