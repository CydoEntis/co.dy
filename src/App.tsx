import { Image, Box, SimpleGrid, Title, Text } from "@mantine/core";
import Layout from "./components/layout/Layout";
import Me from "@/assets/me.png";
function App() {
  return (
    <Layout>
      <SimpleGrid cols={2} px={32}>
        <Box w={320}>
          <Image src={Me} w={200} radius="lg" />
          <Title size="3rem" fw={400} mt={16}>
            I'm Cody Stine
          </Title>
          <Text size="lg">
            Crafting seamless experiences, from pixels to pipelines
          </Text>
        </Box>
        <Box>
          <Box w={460}><Title fw="400" size="2.2rem">Passionate Full-Stack Developer turning challenges into seamless solutions</Title>
          </Box>
        </Box>
      </SimpleGrid>
    </Layout>
  );
}

export default App;
