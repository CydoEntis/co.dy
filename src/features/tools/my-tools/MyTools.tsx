import { Group } from "@mantine/core";
import { tools } from "./tools";
import Section from "@/components/section/Section";
import ToolDetail from "../tool-detail/ToolDetail";

function MyTools() {
  return (
    <Section title="My Toolbelt" withDivder={false} spacing={32}>
      <Group gap={8} w={360}>
        {tools.map((tool, index) => (
          <ToolDetail tool={tool} index={index} />
        ))}
      </Group>
    </Section>
  );
}

export default MyTools;
