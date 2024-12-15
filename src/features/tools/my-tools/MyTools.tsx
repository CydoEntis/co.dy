import { Text, Group, Paper } from "@mantine/core";
import { tools } from "./tools";
import Section from "@/components/section/Section";
import useGetColorTheme from "@/components/theme/hooks/useGetColorScheme";

function MyTools() {
  const { isLightMode } = useGetColorTheme();

  return (
    <Section title="My Toolbelt" withDivder={false} spacing={32}>
      <Group gap={8} w={360}>
        {tools.map((tool, index) => (
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
        ))}
      </Group>
    </Section>
  );
}

export default MyTools;
