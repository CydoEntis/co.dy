import {
  Image,
  Box,
  SimpleGrid,
  Title,
  Text,
  Button,
  Group,
  Divider,
  Paper,
  Avatar,
  Stack,
  Flex,
} from "@mantine/core";
import Layout from "./components/layout/Layout";
import Me from "@/assets/me.png";
import { Building } from "lucide-react";
function App() {
  return (
    <Layout>
      <SimpleGrid cols={2} px={32}>
        <Box w={320}>
          <Image src={Me} w={200} radius="lg" />
          <Title size="3rem" fw={400} mt={16} c="text">
            I'm Cody Stine
          </Title>
          <Text size="lg" c="text">
            Crafting seamless experiences, from pixels to pipelines
          </Text>
        </Box>
        <Box>
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

          <Stack pt={64}>
            <Divider />
            <Title fw="400" size="xl">
              Work Experience
            </Title>
            <Paper bg="secondary" withBorder px={16} py={8} radius="xl">
              <Flex justify="space-between" align="center">
                <Group gap={16}>
                  <Avatar bg="primary" radius="xl">
                    <Building size={18} />
                  </Avatar>
                  <Stack gap={0}>
                    <Text>Full Stack Developer</Text>
                    <Text fw="700">DriveSmart</Text>
                  </Stack>
                </Group>

                <Text size="xs" c="grey">
                  April 2024 - August 2024
                </Text>
              </Flex>
            </Paper>
          </Stack>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default App;
