import {
  Box,
  Group,
  Modal,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Image,
  Button,
} from "@mantine/core";
import Layout from "./components/layout/Layout";

import WorkHistorySection from "./features/work-history/work-history-section/WorkHistorySection";
import EducationSection from "./features/education/education-section/EducationSection";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import WorkSection from "./features/work/work-section/WorkSection";
import Footer from "./features/footer/Footer";
import { useDisclosure } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
import { Work } from "./features/work/work-detail/my-work";
import TechDetail from "./features/technologies/tech-detail/TechDetail";
import { Github, Globe2 } from "lucide-react";
function App() {
  const [workOpened, { open: openWork, close: closeWork }] =
    useDisclosure(false);

  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const openWorkHandler = (work: Work) => {
    setSelectedWork(work);
    openWork();
  };

  return (
    <Layout>
      <Modal opened={workOpened} onClose={closeWork} centered size={1200} withCloseButton={false}>
        <SimpleGrid cols={2}>
          <Carousel height={400}>
            {selectedWork?.images.map((image) => (
              <Carousel.Slide>
                <Image src={image} />
              </Carousel.Slide>
            ))}
          </Carousel>
          <Stack gap={20}>
            <Title c="text">{selectedWork?.name}</Title>
            <Text c="text">{selectedWork?.description}</Text>
            <Group gap={4} w={500}>
              {selectedWork?.technologies.map((tech) => (
                <TechDetail technology={tech} />
              ))}
            </Group>

            <Group gap={4}>
              <Button
                radius="xl"
                variant="filled"
                bg="inverse"
                c="primary"
                leftSection={<Globe2 size={18} />}
              >
                Live Link
              </Button>
              <Button
                variant="outline"
                radius="xl"
                color="inverse"
                leftSection={<Github size={18} />}
              >
                Git Repo
              </Button>
            </Group>
          </Stack>
        </SimpleGrid>
      </Modal>
      <SimpleGrid cols={2} px={32}>
        <Box pos="relative">
          <Hero />
        </Box>

        <Stack gap={1}>
          <About />
          <WorkHistorySection />
          <EducationSection />
          <WorkSection onOpen={openWorkHandler} />
        </Stack>
      </SimpleGrid>
      <Footer />
    </Layout>
  );
}

export default App;
