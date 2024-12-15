import { Tool } from "../my-tools/tools";
import { Paper, Text } from "@mantine/core";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

type ToolDetailProps = {
  tool: Tool;
  index: number;
};

function ToolDetail({ tool, index }: ToolDetailProps) {
  const { isLightMode } = useGetColorTheme();

  return (
    <Paper
      withBorder
      p={8}
      bg="secondary"
      c="inverse"
      key={index}
      style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
    >
      <Text size="sm" fw={700} c="altText">
        {tool.name}
      </Text>
    </Paper>
  );
}

export default ToolDetail;
