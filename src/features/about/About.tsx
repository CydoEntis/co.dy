import Section from "@/components/section/Section";
import { Box, Button, Group, Title } from "@mantine/core";

function About() {
  return (
    <Section id="about-section" withDivider={false} spacing={0}>
      <Box
        w={{ base: "100%", md: 460 }}
      >
        <Title c="text" fw="400" size="2.2rem">
          Passionate Full-Stack Developer turning challenges into seamless
          solutions
        </Title>
        <Group gap={8} pt={32}>
          <Button variant="filled" bg="inverse" c="primary" radius="md">
            Let's talk
          </Button>
          <Button variant="outline" radius="md" color="inverse">
            See my work
          </Button>
        </Group>
      </Box>
    </Section>
  );
}

export default About;
