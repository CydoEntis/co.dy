import { Box, Button, Group, Title } from "@mantine/core";

function About() {
  return (
    <Box w={460}>
      <Title c="text" fw="400" size="2.2rem">
        Passionate Full-Stack Developer turning challenges into seamless
        solutions
      </Title>
      <Group gap={8} pt={32}>
        <Button variant="filled" bg="inverse" c="primary" radius="xl">
          Let's talk
        </Button>
        <Button variant="outline" radius="xl" color="inverse">
          See my work
        </Button>
      </Group>
    </Box>
  );
}

export default About;
