import { Group } from "@mantine/core";
import Section from "@/components/section/Section";
import { technologies } from "./technologies";
import TechDetail from "../tech-detail/TechDetail";

function MyTechnologies() {
  return (
    <Section title="My Toolbelt" withDivder={false} spacing={32}>
      <Group gap={8} w={360}>
        {technologies.map((tech, index) => (
          <TechDetail technology={tech} key={index} />
        ))}
      </Group>
    </Section>
  );
}

export default MyTechnologies;
