import {
  Image,
  Box,
  SimpleGrid,
  Title,
  Text,
  Button,
  Group,
  Divider,
  Stack,
} from "@mantine/core";
import Layout from "./components/layout/Layout";
import Me from "@/assets/me.png";
import WorkHistory from "./features/work-history/WorkHistory";
import useGetColorTheme from "./components/theme/hooks/useGetColorScheme";
import { jobs } from "./features/work-history/work-history";
function App() {
  const { isLightMode } = useGetColorTheme();

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
            <Divider
              style={{ borderColor: isLightMode ? "#E9E0D9" : "#3A4D63" }}
            />
            <Title fw="400" size="xl">
              Work Experience
            </Title>
            {jobs.map((job) => (
              <WorkHistory job={job} />
            ))}
          </Stack>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default App;
